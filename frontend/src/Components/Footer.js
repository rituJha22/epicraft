import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.footer`
  background-color: #262626;
  color: #fff;
  padding: 2rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
 
`;

const Logo = styled.div`
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  text-transform: uppercase;
  span {
    color: #ff9933;
  }
`;

const Links = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0;
  padding: 0;
  li {
    font-size: 1.2rem;
    text-transform: uppercase;
    &:hover {
      color: #ff9933;
    }
  }
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 1rem;
  a {
    color: #fff;
    font-size: 1.8rem;
    &:hover {
      color: #ff9933;
    }
  }
`;

const Address = styled.address`
  font-style: normal;
  font-size: 1.2rem;
  margin-top: 2rem;
  text-align: center;
  line-height: 1.5;
  span {
    color: #ff9933;
    font-weight: bold;
  }
`;
const NavLink = styled.li`
  cursor: pointer;
  `;

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Logo>
        EPI<span>CRAFT</span>
      </Logo>
      <Links>
        <NavLink onClick={() => navigate("/")}>Home</NavLink>
        <NavLink onClick={() => navigate("/about-us")}>About Us</NavLink>
        {/* <li onClick={() => navigate("/about-us")}> About Us</li> */}
        <li>Products</li>
        <li>FAQ</li>
        <li>Contact Us</li>
      </Links>
      <SocialMedia>
        <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
        <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
      </SocialMedia>
      <Address>
        Evershine city<br />
        Mumbai, Maharashtra - 401208<br />
        India<br />
        <span>+91 1234567890</span>
      </Address>
    </Container>
  );
};

export default Footer;
