import React, { useEffect, useState } from "react";
import LayOut from "../../LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductUrl } from "../../../Api/EndPoints";
import ProductCard from "../../Product/ProductCard";
import "./results.css";

function Results() {
  const [results, setResults] = useState([]);
  const { catagoryName } = useParams();

  useEffect(() => {
    axios
      .get(`${ProductUrl}/products/category/${catagoryName}`)
      .then((res) => setResults(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Catagory / {catagoryName}</p>
        <hr />

        <dir className="results_container">
          {results?.map((data) => (
            <ProductCard key={data.id} product={data} />
          ))}
          {console.log(results)}
        </dir>
      </section>
    </LayOut>
  );
}

export default Results;
