import React, { useEffect, useState } from "react";
import LayOut from "../../LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductUrl } from "../../../Api/EndPoints";
import ProductCard from "../../Product/ProductCard";

function ProductDetail() {
  const [productDetail, SetProductDetail] = useState([]);
  const { productId } = useParams();

  console.log(productId);

  useEffect(() => {
    axios
      .get(`${ProductUrl}/products/${productId}`)

      .then((res) => {
        SetProductDetail(res);
        console.log(res);

        console.log(productDetail);
      })

      .catch((err) => console.log(`error : ${err}`));
  }, []);

  return <LayOut>{/* <ProductCard product={productDetail} />; */}</LayOut>;
}

export default ProductDetail;
