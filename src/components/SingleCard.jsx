import React from "react";
import Map from "./Map";

function SingleCard({ value }) {
  return (
    <div key={value.id} style={{ color: "gray", margin: "5px" }}>
      <img src={value.attributes.img} alt="" height="300" width="280" />
      <h3>
        Book: <i className="text-secondary">{value.attributes.title}</i>
      </h3>
      <h5>
        Author: <i className="text-secondary">{value.attributes.author}</i>
      </h5>
      <h6>
        <u className="text-secondary">Overview</u>
      </h6>
      <p>
        <i className="text-secondary">{value.attributes.description}</i>
      </p>
      <hr />
    </div>
  );
}

export default SingleCard;
