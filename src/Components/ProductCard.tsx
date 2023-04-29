import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

type ProductProps = {
  id: number;
  tittle: string;
  price: number;
  imageUrl: string;
  description: string;
};

const ProductCard = ({ id, tittle, price, imageUrl, description }: ProductProps) => {
  const prodcutQuantity: number = 0;

  return (
    <Card style={{ width: "100%", height: "30rem", backgroundColor: "#2c3e50" }}>
      <Card.Img variant="top" src={imageUrl} style={{ width: "100%", height: "50%", objectFit: "cover", objectPosition: "center center" }} />
      <Card.Body className="d-flex flex-column justify-align-content-around align-items-start text-start">
        <Card.Title className="text-start text-decoration-none text-primary " as={Link} to={"/"}>
          {tittle.slice(0, 15)}
        </Card.Title>
        <Card.Text>{description.slice(0, 30)}</Card.Text>
        <Card.Text>{price}$</Card.Text>
        {prodcutQuantity == 0 ? (
          <Button variant="secondary" className="text-light w-100">
            Add to Cart
          </Button>
        ) : null}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
