import axios from "../axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import { useStateValue } from "../StateProvider";
import Navbar from "./Navbar";
import { useNavigate, Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/products/get");
      const filteredProducts = response.data.filter(
        (product) => product.rating >= 4
      );
      setProducts(filteredProducts);
    };
    fetchData();
  }, []);


  return (
    <Container>

      <Banner>
        <BannerSlider>
          <img src="./e1.jpg" alt="" />
          <img src="./e7.jpg" alt="" />

          <img src="./e3.jpg" alt="" />
          <img src="./e4.jpg" alt="" />
          <img src="./e5.jpg" alt="" />
          <img src="./e6.jpg" alt="" />
          <img src="./e2.jpg" alt="" />
          <img src="./e8.jpg" alt="" />
          <img src="./e12.jpg" alt="" />
          <img src="./e11.jpg" alt="" />
          <img src="./e10.jpg" alt="" />

          <img src="./e13.jpg" alt="" />
          <img src="./e9.jpg" alt="" />


        </BannerSlider>
      </Banner>

      <HeadingContainer>
        <HeadingTitle>Handcrafted Treasures</HeadingTitle>
        <ShopNowButton to="/products">Shop Now</ShopNowButton>
      </HeadingContainer>
      <Main>
        {products &&
          products.map((product) => (
            <Card
              key={product._id}
              id={product._id}
              image={product.imageURL}
              price={product.price}
              rating={product.rating}
              title={product.title}
            />
          ))}
      </Main>

    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  height: 100%;
  padding: 2rem;
   overflow-x: hidden;
  // overflow:hidden;
  
`;

const Banner = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
`;
const BannerSlider = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  animation: slide 15s linear infinite;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @keyframes slide {
    0% {
      transform: translateX(0%);
    }
    20% {
      transform: translateX(0%);
    }
    25% {
      transform: translateX(-100%);
    }
    45% {
      transform: translateX(-100%);
    }
    50% {
      transform: translateX(-200%);
    }
    70% {
      transform: translateX(-200%);
    }
    75% {
      transform: translateX(-300%);
    }
    95% {
      transform: translateX(-300%);
    }
    100% {
      transform: translateX(-400%);
    }
  }
`;


const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;
// const Heading = styled.h1`
//   font-size: 2.5rem;
//   font-weight: bold;
//   text-align: center;
//   margin-bottom: 2rem;
//   color: #fff;
//   background: linear-gradient(to right, #8b4513, #ff8c00);
//   padding: 1rem;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// `;
const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const HeadingTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: #8b4513;
`;

const ShopNowButton = styled(Link)`
  background-color: #8b4513;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #654321;
    cursor: pointer;
  }
`;




export default Home;
