import { useState, useEffect } from "react";
import { items } from "../public/Items.json";
import slideStyles from "../styles/Slideshow.module.css";

import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Slideshow.module.css";
import $ from "jquery";
export default function Slideshow() {
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    $(".carousel-control-prev-icon")
      .css("background-color", "black")
      .css("border-radius", "50%");
    $(".carousel-control-next-icon")
      .css("background-color", "black")
      .css("border-radius", "50%");
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "400px",
        margin: "auto",
      }}
    >
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {bootstrap.map((item) => (
          <Carousel.Item key={item.id} interval={4000}>
            <img
              src={`${item.imageUrl}`}
              alt="slides"
              style={{ marginTop: "40px", width: "400px", height: "600px" }}
            />
            <Carousel.Caption>
              <p>{item.body}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
