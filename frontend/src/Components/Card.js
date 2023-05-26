
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Rating from "@material-ui/lab/Rating";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";

function Card({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const [message, setMessage] = useState("");

  const addToBasket = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        price,
        image,
        rating,
      },
    });
    setMessage("Added to cart");
  };

  return (
    <Container>
      <Link to={`/product-view/${id}`}>
        <Image>
          <img src={image} alt="" />
        </Image>
      </Link>

      <Description>
        <Link to={`/product/${id}`}>

        </Link>
        <h5>{title}</h5>
        <Rating
          name="half-rating-read"
          defaultValue={rating}
          precision={0.5}
          readOnly
        />

        <Price>₹{price}</Price>


        <AddToCartButton onClick={(e) => {
          addToBasket(e);
          setMessage("Added to cart");
        }}>
          Add to Cart
        </AddToCartButton>
        <ViewPopup>View</ViewPopup>
      </Description>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  z-index: 10;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1);
    z-index: 999;
    box-shadow: 0px 0px 5px #9b4dca, 0px 0px 10px #9b4dca, 0px 0px 5px #9b4dca,
    0px 0px 10px #9b4dca;
    // box-shadow: 0px 0px 10px #b3a394, 0px 0px 20px #b3a394, 0px 0px 30px #b3a394, 0px 0px 40px #b3a394;
    // box-shadow: 0px 0px 10px #e5b7b5, 0px 0px 20px #e5b7b5, 0px 0px 30px #e5b7b5, 0px 0px 40px #e5b7b5;

  }
`;

const Image = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex: 0.3;
  img {
    width: 200px;
    height: 220px;
  }
`;
const Description = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 0.7;


`;

const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
`;

const AddToCartButton = styled.button`
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 8px 8px;
  background-color: #0e0242;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;

`;
const ViewPopup = styled.div`

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background-color: rgba(0,0,0,0.1);
  color: #fff;
  // text-shadow: 0px 0px 10px #e5b7b5, 0px 0px 20px #e5b7b5, 0px 0px 30px #e5b7b5, 0px 0px 40px #e5b7b5;
  text-shadow: 0px 0px 10px #b3a394, 0px 0px 20px #b3a394, 0px 0px 30px #b3a394, 0px 0px 40px #b3a394;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  z-index: 999;
  pointer-events: none;

  ${Container}:hover & {
    opacity: 1;
  }
}

`;


export default Card;



