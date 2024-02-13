import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaCirclePlus } from "react-icons/fa6";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function NewProduct() {
  return (
    <div style={{ margin: "0 10rem" }}>
      <h2>Top Products</h2>
      <Row>
        {[1, 2, 3, 4, 5, 6].map((data) => (
          <Col md={2}>
            <Card style={{ width: "100%", background: "#f8f8f8" }}>
              <img
                variant="top"
                src="https://laravel.pixelstrap.net/fastkart/storage/90/Pomegranate_2.png"
                width="100%"
                alt="card-img"
                style={{ textAlign: "center", margin: "auto" }}
              />
              <Card.Body style={{ margin: "0" }}>
                <div className="text-start">
                  <Card.Title>jhjhvj</Card.Title>
                  <Card.Text className="mb-0">5 KG</Card.Text>
                  <Card.Text style={{ color: "lightseagreen" }}>
                    $ 4.54 <del>$10.00</del>
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
                      left: "35px",
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
    </div>
  );
}
