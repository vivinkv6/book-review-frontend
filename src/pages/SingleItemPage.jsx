import React from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import SingleCard from "../components/SingleCard";

function SingleItemPage({ data, error, loading }) {
  const { id } = useParams();

  return (
    <>
      {loading && (
        <center>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </center>
      )}

      {error && <Alert variant="danger">Server Issue</Alert>}

      {data.filter((value)=>Number(value.id) === Number(id)).map((value)=>{
        return(
          <>
          <SingleCard value={value}/>
          </>
        )
      })}

    </>
  );
}

export default SingleItemPage;
