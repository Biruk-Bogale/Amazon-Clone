import React from "react";
import Rating from "@mui/material/Rating";
import "./product.css";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { id, image, title, rating, price } = product;
  return (
    <div className="productCard_container">
      <Link to={`/products/${id}`}>
        <img src={image} alt="image" />
      </Link>
      <div>
        <h3>{title}</h3>
        <div className="productCard_rating">
          {/* rating */}
          <Rating value={rating.rate} precision={0.1} />

          {/* rating counter */}
          <small>{rating.count}</small>
        </div>
        <div>
          {/* price */}

          <CurrencyFormat amount={price} />
        </div>
        <button>add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
