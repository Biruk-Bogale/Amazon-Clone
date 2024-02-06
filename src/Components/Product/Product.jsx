import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import "./product.css";

function Product() {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log("error: " + err));
  }, [setProducts]);

  console.log(products);

  return (
    <div className="product_container">
      {products?.map((data, i) => {
        return <ProductCard product={data} key={i} />;
      })}
    </div>
  );
}

export default Product;
