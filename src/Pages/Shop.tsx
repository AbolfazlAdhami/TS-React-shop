import { Col, Row } from "react-bootstrap";
import Products from "../Data/Product_Data.json";
import { ProductCard } from "../Components/_exports";

const Shop = () => {
  console.log(Products);
  return (
    <div className="w-100 text-center mt-3 overflow-auto">
      <Row md={3} xs={1} lg={4} className="w-100 gap-3 px-2 justify-content-center">
        {Products.map((product) => (
          <Col key={product.id} className="">
            <ProductCard id={product.id} tittle={product.title} price={product.price} imageUrl={product.image} description={product.description} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Shop;
