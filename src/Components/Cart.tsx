import React from "react";
import { Offcanvas } from "react-bootstrap";
import { useCartContex } from "../Context/CartContext";

type CartProps = {
  isShow: boolean;
};

const Cart = ({ isShow }: CartProps) => {
  const { closeHandler } = useCartContex();
  console.log(isShow, closeHandler);
  return (
    <Offcanvas show={isShow} backdrop="static">
      <Offcanvas.Header className="bg-dark text-info" closeButton onClick={closeHandler}>
        <Offcanvas.Title>Cart List</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="bg-dark text-light">I will not close if you click outside of me.</Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
