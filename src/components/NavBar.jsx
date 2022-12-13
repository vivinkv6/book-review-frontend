import React from "react";

import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Offcanvas from "react-bootstrap/Offcanvas";
import "./styles/navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} bg="secondary" expand={expand} className="mb-3 ">
          <Container fluid>
            <Link to="/" className="text-decoration-none">
              {" "}
              <Navbar.Brand className="title">Book Review</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Book Store
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link
                    to="language"
                    className="button d-inline text-dark me-2 px-2 text-decoration-none"
                  >
                    Language
                  </Link>
                  <Link
                    to="search"
                    className="button text-dark  text-decoration-none px-2"
                  >
                    Search
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;
