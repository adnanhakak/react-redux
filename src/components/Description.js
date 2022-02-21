import React from "react";
import { useParams } from "react-router";
import "./product.css";

const Description = ({ products }) => {
  const { id } = useParams();
  return (
    <div>
      {products
        .filter((each) => parseInt(each.id) === parseInt(id))
        .map((last) => {
          return (
            <div className="description" key={last.id}>
              <img
                style={{ marginTop: "20px" }}
                src="#"
                alt="ImageNotAvailable"
              />
              <div className="each">
                <h3>Product name: {last.name}</h3>
              </div>
              <div className="each">
                <h4> Price: {last.price}</h4>
              </div>
              <div className="each" id="des">
                <h5 style={{ display: "inline" }}>Description:</h5>{" "}
                {last.description}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Description;
