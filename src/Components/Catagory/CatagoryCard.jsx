import React from "react";
import "./catagory.css";

function CatagoryCard({ data }) {
  function trunc(str, n) {
    return str?.length > n ? str.substr(0, n) + "..." : str;
  }

  return (
    <div className="catagoryC">
      <a href="">
        <span>
          <h2>{trunc(data.title, 45)}</h2>
        </span>
        <img src={data.image} alt="image" />
        <p>Shop N4ow</p>
      </a>
    </div>
  );
}

export default CatagoryCard;
