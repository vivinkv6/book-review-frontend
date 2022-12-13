import React from "react";
import Map from "./Map";

function SingleCard({ value }) {
  return (
    <div key={value.id} style={{ color: "gray", margin: "5px" }}>
      <img src={value.attributes.img} alt="" height="300" width="280" />
      <h3>
        Book: <i>{value.attributes.title}</i>
      </h3>
      <h5>
        Author: <i>{value.attributes.author}</i>
      </h5>
      <h6>
        <u>Overview</u>
      </h6>
      <p>
        <i>{value.attributes.description}</i>
      </p>
      <hr />
    </div>
  );
}

export default SingleCard;
