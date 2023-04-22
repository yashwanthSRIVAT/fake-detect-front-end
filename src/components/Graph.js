import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const Graph = () => {
  return (
    <div className="container">
      <h1>Form Example</h1>
      <Form>
        <Form.Group as={Row} controlId="formHorizontalEmail" class="fp-inp">
          <Form.Label column sm={2}>
            Label 1
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="text" placeholder="Input 1" />
          </Col>
          <Form.Label column sm={2}>
            Label 2
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="text" placeholder="Input 2" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Label 3
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="text" placeholder="Input 3" />
          </Col>
          <Form.Label column sm={2}>
            Label 4
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="text" placeholder="Input 4" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Label 5
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="text" placeholder="Input 5" />
          </Col>
          <Form.Label column sm={2}>
            Label 6
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="text" placeholder="Input 6" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Label 7
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="text" placeholder="Input 7" />
          </Col>
          <Form.Label column sm={2}>
            Label 8
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="text" placeholder="Input 8" />
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Graph;
