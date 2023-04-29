import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import { Navbar } from "./Components/_exports";
import { CartProvider, useCartContex } from "./Context/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
