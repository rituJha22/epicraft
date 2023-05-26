import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AdminPanel = () => {
    return (
        <Container>
            <Title>Admin Panel</Title>
            <Nav>
                <StyledLink to="/admin/add-product">Add Product</StyledLink>
                <StyledLink to="/admin/edit-product/1">Edit Product</StyledLink>
                <StyledLink to="/admin/delete-product/1">Delete Product</StyledLink>
            </Nav>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #a86e52;
  font-family: 'Lobster', cursive;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`;

const StyledLink = styled(Link)`
  padding: 0.5rem 1rem;
  background-color: #a86e52;
  color: white;
  text-decoration: none;
  margin-right: 1rem;
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #87553e;
  }
`;

export default AdminPanel;
