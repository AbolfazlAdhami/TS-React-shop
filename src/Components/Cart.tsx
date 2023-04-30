import React from "react";
import { Offcanvas } from "react-bootstrap";
import { useCartContex } from "../Context/CartContext";
import Productcart from "./ProductCart";
import Products from "../Data/Product_Data.json";

type CartProps = {
  isShow: boolean;
};

const Cart = ({ isShow }: CartProps) => {
  const { closeHandler, cart } = useCartContex();

  const totalPrice = cart.reduce((pervPrice, newItem) => {
    const product = Products.find((item) => item.id == newItem.id);
    return pervPrice + (product?.price || 0) * newItem.quantity;
  }, 0);
  return (
    <Offcanvas show={isShow} backdrop="static">
      <Offcanvas.Header className="bg-dark text-info" closeButton onClick={closeHandler}>
        <Offcanvas.Title>Cart List</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="bg-dark text-light h-100 d-flex flex-column justify-content-around align-items-center gap-2 overflow-auto pt-1 pb-2">
        {cart.map((item) => (
          <Productcart key={item.id} id={item.id} prodcutQuantity={item.quantity} />
        ))}
        <div className="bottom-0">Total Price:{totalPrice}$</div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
