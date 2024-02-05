import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

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
    <div>
      {/* {products.map((data) => {
        return <ProductCard product={data} />;
      })} */}
    </div>
  );
}

export default Product;
