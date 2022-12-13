import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
function Cards({ data }) {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {data.map((value) => {
            return (
              <div className="col-md-3 " key={value.id}>
                <Card
                  className="bg bg-light"
                  style={{ width: "13rem", marginTop: "20px" }}
                >
                  <Card.Img
                    variant="top"
                    style={{ height: "200px" }}
                    src={value.attributes.img}
                  />
                  <Card.Body className="bg bg-light text-secondary">
                    <Card.Title>{value.attributes.title}</Card.Title>
                    <Link to={`${value.id}`} style={{ textDecoration: "none" }}>
                      <Button variant="primary">Details</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
        <Link to="/post">
          {" "}
          <i
            className="bi bi-plus-circle-fill  text-light"
            style={{
              fontSize: "50px",
              position: "fixed",
              bottom: "0px",
              right: "5px",
            }}
          ></i>{" "}
        </Link>
      </div>
    </>
  );
}

export default Cards;
