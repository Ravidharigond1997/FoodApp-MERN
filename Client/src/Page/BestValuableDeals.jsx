import React from "react";
import "../Css/Home.css";
import Carousel from "react-bootstrap/Carousel";

export default function BestValuableDeals() {
  return (
    <div style={{ margin: "0 10rem" }}>
      <h2 style={{ margin: "20px 0" }}>Best Valuable Deals</h2>
      <div className="d-flex justify-content-center">
        <Carousel
          data-bs-theme="dark"
          style={{ width: "100%", textAlign: "center", gap: "10px" }}
        >
          <Carousel.Item className="text-align-center">
            <img
              src="https://laravel.pixelstrap.net/fastkart/storage/664/rome_02.jpg"
              alt="First slide"
              width="300px"
              height="200px  "
              style={{ margin: "10px 10px" }}
            />
            <img
              src="	https://laravel.pixelstrap.net/fastkart/storage/663/rome_01.jpg"
              alt="Second slide"
              width="300px"
              height="200px"
              className="mx-10"
              style={{ margin: "10px 10px" }}
            />
            <img
              src="https://laravel.pixelstrap.net/fastkart/storage/665/rome_03.jpg"
              alt="Third slide"
              width="300px"
              height="200px"
              className="mx-10"
              style={{ margin: "10px 10px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://laravel.pixelstrap.net/fastkart/storage/665/rome_03.jpg"
              alt="First slide"
              width="300px"
              height="200px"
              className="mx-10"
              style={{ margin: "10px 10px" }}
            />
            <img
              src="https://laravel.pixelstrap.net/fastkart/storage/665/rome_03.jpg"
              alt="Second slide"
              width="300px"
              height="200px"
              className="mx-10"
              style={{ margin: "10px 10px" }}
              s
            />
            <img
              src="https://laravel.pixelstrap.net/fastkart/storage/664/rome_02.jpg"
              alt="Third slide"
              width="300px"
              height="200px"
              className="mx-10"
              style={{ margin: "10px 10px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://laravel.pixelstrap.net/fastkart/storage/664/rome_02.jpg"
              alt="First slide"
              width="300px"
              height="200px"
              className="mx-10"
              style={{ margin: "10px 10px" }}
            />
            <img
              src="https://laravel.pixelstrap.net/fastkart/storage/664/rome_02.jpg"
              alt="Second slide"
              width="300px"
              height="200px"
              className="mx-10"
              style={{ margin: "10px 10px" }}
              s
            />
            <img
              src="https://laravel.pixelstrap.net/fastkart/storage/664/rome_02.jpg"
              alt="Third slide"
              width="300px"
              height="200px"
              className="mx-10"
              style={{ margin: "10px 10px" }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
