import "./ItemListConteiner.css";
import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";

const ItemListContainer = ({ products }) => {
  return (
    <div
      style={{
        backgroundColor: "lightpink",
        display: "flex",
        flexWrap: "wrap",
        width: "100vw",
        justifyContent: "space-around",
      }}>
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            style={{
              backgroundColor: "#BB8FCE",
              width: "18rem",
              margin: 20,
            }}>
            <Link to={`/item/${product.id}`}>
              <Card.Img variant="top" src={product.image} />
            </Link>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>${product.price}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
export default ItemListContainer;
