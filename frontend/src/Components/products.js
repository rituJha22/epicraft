import axios from "../axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import { useStateValue } from "../StateProvider";
import Navbar from "./Navbar";

// Define the card styles as a separate styled component
const StyledCard = styled.div`
  position: relative;
  width: 260px;
  height: 400px;
  overflow: visible;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: transform 0.5s ease;
  cursor: pointer;

  .view-popup {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    z-index: 999;

    &:hover {
      opacity: 1;
    }
  }

  &:hover {
    transform: translateY(-10px);
  }
}
`;

function Products() {
  const [products, setProducts] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("/products/get");
      setProducts(data);
      console.log(data);
    };
    fetchdata();
  }, []);

  return (
    <Container>

      <Main>
        {products &&
          products?.data.map((product) => (
            <StyledCard key={product._id}>
              <Card
                id={product._id}
                image={product.imageURL}
                price={product.price}
                rating={product.rating}
                title={product.title}
                className="card"
              >
                <div className="view-popup">View</div>
              </Card>
            </StyledCard>
          ))}
      </Main>
    </Container>
  );
}

const Container = styled.div`
width: 100%;

  margin-top: 150px;
`;

const Main = styled.div`
  margin-top: 50px;
  display: grid;
  justify-content: center;
  place-items: center;
  width: 100%;
  grid-auto-rows: 420px;
  grid-template-columns: repeat(4, 280px);
  grid-gap: 20px;

  /* Mobile */
  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 50%);
    grid-gap: 0;
  }

  /* Tablets */
  @media only screen and (min-width: 767px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 30%);
  }

  @media only screen and (min-width: 767px) {
    margin-top: -130px;
    padding: 10px 0px;
  }
`;

export default Products;
