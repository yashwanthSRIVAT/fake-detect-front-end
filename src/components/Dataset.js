import axios from "axios";
import React, { useState, useEffect } from "react";
import { useTable } from "react-table";
import Papa from "papaparse";

const Dataset = () => {
  // Define state to store the CSV data
  const [data, setData] = useState([]);

  // Define effect to read the CSV file on component mount
  useEffect(() => {
    const fetchData = async () => {
      console.log("Trying to load the dataset.csv file...");
      const response = await axios.get("/dataset.csv");
      const result = Papa.parse(response.data, { header: true }).data;
      setData(result);
    };
    fetchData();
  }, []);

  // Define columns and data for the table
  const columns = React.useMemo(() => {
    if (data.length === 0) {
      return [];
    }
    return Object.keys(data[0]).map((key) => ({ Header: key, accessor: key }));
  }, [data]);

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  // Render the table
  return (
    <table
      {...getTableProps()}
      style={{ border: "1px solid black", borderCollapse: "collapse" }}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{ border: "1px solid black", padding: "5px" }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  style={{ border: "1px solid black", padding: "5px" }}
                >
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Dataset;
