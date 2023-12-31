import React from "react";
import { Card } from "react-bootstrap";
import { ItemQuantitySelector } from "../ItemQuantitySelector/ItemQuantitySelector";

const ItemDetailContainer = ({ product }) => {
  return (
    <div
      style={{
        backgroundColor: "lightpink",
        display: "flex",
        flexWrap: "wrap",
        width: "100vw",
        height: "120vh",
        justifyContent: "space-around",
      }}>
      <Card
        key={product.id}
        style={{
          backgroundColor: "#BB8FCE",
          width: "18rem",
          margin: 20,
          height: "650px",
        }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text style={{ fontSize: "20px" }}>${product.price}</Card.Text>
        </Card.Body>
        <ItemQuantitySelector />
      </Card>
    </div>
  );
};

export default ItemDetailContainer;
