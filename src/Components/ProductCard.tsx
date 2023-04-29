import { Button,   Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContex } from "../Context/CartContext";
type ProductProps = {
  id: number;
  tittle: string;
  price: number;
  imageUrl: string;
  description: string;
};

const ProductCard = ({ id, tittle, price, imageUrl, description }: ProductProps) => {
  const { addItem, decreaseItem, getQuantity, removeItem } = useCartContex();
  const prodcutQuantity: number = getQuantity(id);

  return (
    <Card style={{ width: "100%", height: "35rem", backgroundColor: "#2c3e50" }}>
      <Card.Img variant="top" src={imageUrl} style={{ width: "100%", height: "50%", objectFit: "cover", objectPosition: "center center" }} />
      <Card.Body className="d-flex flex-column justify-align-content-around align-items-start text-start">
        <Card.Title className="text-start text-decoration-none text-primary " as={Link} to={"/"}>
          {tittle.slice(0, 15)}
        </Card.Title>
        <Card.Text>{description.slice(0, 30)}</Card.Text>
        <Card.Text>{price}$</Card.Text>
        {prodcutQuantity == 0 ? (
          <Button variant="secondary" onClick={() => addItem(id)} className="text-light w-100">
            Add to Cart
          </Button>
        ) : (
          <div className="w-100 d-flex flex-column  justify-content-center align-items-center">
            <div className="  d-flex p-2 ">
              <Button variant="danger" className="text-light  mx-1" onClick={() => decreaseItem(id)}>
                -
              </Button>{" "}
              <h5>{prodcutQuantity}</h5>
              <Button variant="success" className="text-light mx-1" onClick={() => addItem(id)}>
                +
              </Button>
            </div>
            <Button variant="secondary" className="text-light " onClick={() => removeItem(id)}>
              Remove Cart
            </Button>{" "}
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
