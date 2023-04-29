import React, { useState } from "react";
import { Nav, Container, Navbar as Navi, Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [count, setCount] = useState(1);
  const scrollhandler = () => {
    const scroll = document.body.scroll();
    console.log(scroll);
  };
  
  return (
    <Navi className="mb-2 p-1 fs-5  fw-1 ">
      <Container>
        <Nav>
          <Nav.Link as={NavLink} to="/" className="text-light">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/shop" className="text-light">
            Shop
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about" className="text-light">
            About
          </Nav.Link>
        </Nav>

        <button className="cart-icon   py-1 px-2 rounded btn btn-outline-secondary" style={{ position: "relative", width: "2.5rem", height: "2.5rem", fontSize: "1.2rem" }}>
          <i className="bx bxs-cart-alt text-light"></i>
          <Badge bg="transparent" className="text-light" style={{ position: "absolute", backgroundColor: "transparent", fontSize: "1rem", bottom: "0", right: "0", transform: "translate(25%, -10%)" }}>
            {count > 0 ? count : null}
          </Badge>
        </button>
      </Container>
    </Navi>
  );
}

export default Navbar;
