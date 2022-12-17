import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import useFetch from "../hooks/UseFetch";
import Spinner from "react-bootstrap/Spinner";

function SearchPage() {
  const { data, error, loading } = useFetch("http://localhost:1337/api/books");
  const [book, setBook] = useState("");
  const [visible, setVisible] = useState(false);
  console.log(book);

  const onsubmition = (e) => {
    e.preventDefault();

    setVisible(true);
  };

  return (
    <>
      <div className="container">
        <h1 align="center" className="text-secondary fw-bold">Book Name</h1>
        <form
          onSubmit={onsubmition}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            style={{ borderRadius: "7px" }}
            required
            onChange={(e) => setBook(e.target.value)}
          />
          <button className="btn btn-secondary mt-2">Search</button>
        </form>
        {loading && (
          <center>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </center>
        )}
        {visible && book.length > 0 && (
          <div className="row">
            {data
              .filter((value) => value.attributes.slug.match(`${book}`))
              .map((value) => {
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
                        <Link
                          to={`${value.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <Button variant="primary">Details</Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </>
  );
}

export default SearchPage;
