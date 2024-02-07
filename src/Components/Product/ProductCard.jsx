import React from "react";
import Rating from "@mui/material/Rating";
import "./product.css";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";

function ProductCard({ product, flex, add_description }) {
  const { id, image, title, rating, price, description } = product;
  // console.log(id);
  return (
    <div className={`productCard_container ${flex && "product_detail"}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt="image" />
      </Link>
      <div>
        <h3>{title}</h3>
        {add_description && <div className="productCard_description">{description}</div>}
        <div className="productCard_rating">
          {/* rating */}
          <Rating value={rating?.rate} precision={0.1} />

          {/* rating counter */}
          <small>{rating?.count}</small>
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
