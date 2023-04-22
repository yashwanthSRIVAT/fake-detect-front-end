import React from "react";
import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import './styles.css';

const Predict = () => {
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    const response = await fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    console.log(result);
    setPrediction(result.prediction);
  };
  

  return (
    <div className="container">
      <h1 className="pred-hdr">Predicting Genuineness</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} controlId="formHorizontalEmail" className="fp-inp">
          <Form.Label column sm={2}>
            Account Age
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="number" name="account_age" placeholder="Enter account's age" />
          </Col>
          <Form.Label column sm={2}>
            Gender
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="number" name="gender" min="0" max="1" placeholder="Enter 0 or 1" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalPassword" className="fp-inp">
          <Form.Label column sm={2}>
            User Age
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="number" name="user_age" placeholder="Age of the user" />
          </Col>
          <Form.Label column sm={2}>
            Links in description
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="number" name="links" min="0" max="1" placeholder="Enter 0 or 1" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalPassword" className="fp-inp">
          <Form.Label column sm={2}>
            Status Count
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="number" name="status_count" placeholder="No. of statuses the account has posted" />
          </Col>
          <Form.Label column sm={2}>
            Friend Count
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="number" name="friend_count" placeholder="No. of friends" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalPassword" className="fp-inp">
          <Form.Label column sm={2}>
            Location
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="number" name="loc" min="0" max="1" placeholder="Enter 0 or 1" />
          </Col>
          <Form.Label column sm={2}>
            Location IP
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="number" name="loc_ip" min="0" max="1" placeholder="Enter 0 or 1" />
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {prediction && (
        <div className="mt-4">
          <h2>Prediction Result: {prediction}</h2>
        </div>
      )}
    </div>
  );
};

export default Predict;
