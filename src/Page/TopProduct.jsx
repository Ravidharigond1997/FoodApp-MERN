import "../Css/Home.css";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaCirclePlus } from "react-icons/fa6";

const cardList = [
  {
    name: "Premium SeaFood",
    img: "https://laravel.pixelstrap.net/fastkart/storage/261/Sea_food_1.png",
    details: "10 Pices",
    price: "7.00",
  },
  {
    name: "Farm-fresh Mushrooms",
    img: "https://laravel.pixelstrap.net/fastkart/storage/259/Mushroom_4.png",
    details: "0.5ks",
    price: "4.25",
  },
  {
    name: "Health and Superior",
    img: "https://laravel.pixelstrap.net/fastkart/storage/246/Jalapeno_1.png",
    details: "1 Jar",
    price: "8.90",
  },
  {
    name: "Gourement Buns",
    img: "https://laravel.pixelstrap.net/fastkart/storage/251/Bun_1.png",
    details: "2 Packets",
    price: "4.60",
  },
];

function TopProduct() {
  return (
    <div className="food-card">
      <div className="card-header">
        <h2>Our Products</h2>
        <ul style={{ listStyleType: "none", display: "flex" }}>
          <li>
            <button className="btn1">Grocery & Staples</button>
          </li>
          <li>
            <button className="btn2">Biscuits & Snacks</button>
          </li>
        </ul>
      </div>
      <Row style={{ margin: "0 10rem" }}>
        {cardList?.map((cardData) => (
          <Col md={3}>
            <Card
              className=""
              style={{
                width: "100%",
                textAlign: "center",
                background: "#f8f8f8",
              }}
            >
              <Card.Img variant="top" src={cardData.img} />
              <Card.Body className="m-0">
                <div className="text-start">
                  <Card.Title>{cardData.name}</Card.Title>
                  <Card.Text className="mb-0">{cardData.details}</Card.Text>
                  <Card.Text style={{ color: "lightseagreen" }}>
                    $ {cardData.price} <del>$10.00</del>
                  </Card.Text>
                  <Card.Text>{}</Card.Text>
                </div>
                <Button
                  variant="primary"
                  className="w-100 bg-white text-black"
                  style={{ borderRadius: "30px" }}
                >
                  Add{" "}
                  <FaCirclePlus
                    style={{
                      position: "relative",
                      left: "80px",
                      bottom: "1px",
                      fontSize: "30px",
                      backgroundColor: "#f9f8f6",
                    }}
                  />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row style={{ margin: "40px 10rem" }}>
        <Col md={6} style={{ alignItems: "center" }}>
          <img
            src="https://laravel.pixelstrap.net/fastkart/storage/671/rome_08.jpg"
            width="570px"
            height="350px"
            alt="image2"
          />
        </Col>
        <Col md={6}>
          <img
            src="https://laravel.pixelstrap.net/fastkart/storage/666/rome_04.jpg"
            width="570px"
            height="350px"
            alt="image1"
            style={{ position: "relative", left: "10px" }}
          />
        </Col>
      </Row>
    </div>
  );
}

export default TopProduct;
