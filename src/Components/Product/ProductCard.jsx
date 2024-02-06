import React from "react";
import Rating from "@mui/material/Rating";
import "./product.css";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";

function ProductCard({ product }) {
  return (
    <div className="productCard_container">
      <a href="">
        <img src={product.image} alt="image" />
      </a>
      <div>
        <h3>{product.title}</h3>
        <div className="productCard_rating">
          {/* rating */}
          <Rating value={product.rating.rate} precision={0.1} />

          {/* rating counter */}
          <small>{product.rating.count}</small>
        </div>
        <div>
          {/* price */}

          <CurrencyFormat amount={product.price} />
        </div>
        <button>add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
