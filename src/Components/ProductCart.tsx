import React from "react";
import Products from "../Data/Product_Data.json";
import { Button, Stack } from "react-bootstrap";
import { useCartContex } from "../Context/CartContext";

type ProductType = {
  id: number;
  prodcutQuantity: number;
};

const Productcart = ({ id, prodcutQuantity }: ProductType) => {
  const product = Products.find((item) => item.id === id);
  const { addItem, removeItem, decreaseItem } = useCartContex();

  return (
    <Stack className="d-flex flex-row  justify-content-start p-2">
      <img src={product?.image} style={{ height: "5rem", width: "5rem", objectFit: "cover", borderRadius: "0.5" }} />
      <div>
        <h5>{product?.title}</h5>
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
      </div>
    </Stack>
  );
};

export default Productcart;
