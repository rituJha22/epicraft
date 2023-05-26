import axios from "../axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";


import { useStateValue } from "../StateProvider";
import Rating from "@material-ui/lab/Rating";

const Container = styled.div`
  width: 100%;
  // background-color: #f5f5f5;
  height: 100%;
  padding: 2rem;
  overflow-x: hidden;
  
`;
const ProductDetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 30px;
  // margin-left:30px;
  // margin-right:60px;
  
  
`;

const ProductImageContainer = styled.div`

  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const ProductImage = styled.img`
max-width: 100%;
max-height: 500px;
object-fit: contain;
  
  border-radius: 4px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;



const ProductInfoContainer = styled.div`
  width: 40%;
  padding: 10px;
  margin-right:80px;
`;

const ProductTitle = styled.h2`
  font-size: 26px;
  font-weight: bold;
  margin: 0 0 10px;
`;

const ProductPrice = styled.h4`
  font-size: 22px;
  font-weight: bold;
  margin: 0 0 10px;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  // margin: 0 0 10px;
  margin:auto;
`;


const ProductRatingStars = styled.div`
  display: flex;
  align-items: center;
`;

const StyledRating = styled(Rating)`
  margin-right: 5px;
`;
const ProductRating = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

const AddToCartButton = styled.button`
  // background-color: #007bff;
  // background-color: #8b4513;

  background-color:  #ff9933 ;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;
  margin-top:10px;
`;

const BuyNowButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;
`;

const ProductArtistContainer = styled.div`
  width: 40%;
  padding: 10px;
`;

const ProductArtistName = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 10px;
`;

const ProductArtistDescription = styled.p`
  font-size: 16px;
  margin: 0 0 10px;
`;
function ProductDetails(title, price, image, rating,) {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const fetchdata = async () => {
    const data = await axios.get(`/product-view/get/${id}`);
    setProduct(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchdata();
  }, [id]);

  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: product._id,
        title: product.data.title,
        price: product.data.price,
        image: product.data.imageURL,
        rating: product.data.rating,
      },
    });
    setMessage("Added to cart");
  };

  const buyNow = (e) => {
    e.preventDefault();
    addToBasket(e);
    navigate("/address");
  };


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };



  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <Container>
        <ProductDetailsContainer>
          <ProductImageContainer>
            <Slider {...settings}>
              <div>
                <ProductImage src={product.data.imageURL} />
              </div>
            </Slider>
          </ProductImageContainer>
          <ProductInfoContainer>
            <ProductTitle>{product.data.title}</ProductTitle>
            <ProductPrice>₹{product.data.price}</ProductPrice>
            <ProductDescription>{product.data.description}</ProductDescription>
            <ProductRating>
              <ProductRatingStars>
                <StyledRating
                  name="product-rating"
                  value={product.data.rating}
                  precision={0.5}
                  readOnly
                />
                {/* <span>{product.data.rating}</span> */}
              </ProductRatingStars>
            </ProductRating>
            <AddToCartButton onClick={addToBasket}>Add to cart</AddToCartButton>
            <BuyNowButton onClick={buyNow}>Buy Now</BuyNowButton>
            {message && <p>{message}</p>}
          </ProductInfoContainer>
          <ProductArtistContainer>
            <h3>ARTINFO</h3>
            <ProductArtistName>{product.data.artistname}</ProductArtistName>
            <ProductArtistDescription>
              {product.data.artdescription}
            </ProductArtistDescription>
          </ProductArtistContainer>
        </ProductDetailsContainer>
      </Container>
    );

  }
}

export default ProductDetails;
