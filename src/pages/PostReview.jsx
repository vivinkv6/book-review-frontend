import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function PostReview() {
  return (
    <div className="container">
      <div className="row">
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "3px solid black",
          }}
        >
          <h1>
            <u>Book Details</u>
          </h1>
          <div className="col-md-4">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Book Name</Form.Label>
              <Form.Control type="text" required placeholder="Enter Book Title" />
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Author Name</Form.Label>
              <Form.Control type="text" required placeholder="Enter Author Name" />
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Book Image</Form.Label>
              <Form.Control type="file" style={{width:'210px'}} required placeholder="Password" />
            </Form.Group>
          </div>
          <Form.Label>Book Overview</Form.Label>
          <div className="col-md-4">
         
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <Button variant="primary" type="submit" className="mt-3 mb-3">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default PostReview;
