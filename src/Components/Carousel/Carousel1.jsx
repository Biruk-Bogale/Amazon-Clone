import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "./Img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";

function Carousel1() {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((img_map, i) => {
          return <img key={i} src={img_map} alt="images" />;
        })}
      </Carousel>

      <div className="carousel_fade"></div>
    </>
  );
}

export default Carousel1;
