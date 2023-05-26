import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import EditProduct from "./Components/AdminPanel/EditProduct";
import DeleteProduct from "./Components/AdminPanel/DeleteProduct";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Address from "./Components/Address";
import Checkout from "./Components/Checkout";
import Products from "./Components/products";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Payment from "./Components/Payment";
import SignUp from "./Components/SignUp";
import Footer from './Components/Footer';
import { useNavigate } from "react-router-dom";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import AddProduct from "./Components/AddProduct";
import Orders from "./Components/Orders";
import AboutUs from "./Components/AboutUs";
import ProductDetail from "./Components/ProductDetail";
import AdminPanel from "./Components/AdminPanel/AdminPanel";
// import ProductDetails from "./Components/views/ProductDetails";

const promise = loadStripe(
  "pk_test_51MRAqmSAAchZSQiNOri56J7F8D8lSZismCKrxxEizEDmlJ60NGyaeOQYBLsGdFNveXEgZiPibGtFWSeAlTcfPNEy000SnSmr3H"
);

function App() {
  // const [basket, setBasket] = useState([])
  // console.log("basket >>>>", basket);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    // Check if user is authenticated and admin
    // If so, set isAdmin state to true
    // This is just an example implementation
    if (isAuthenticated) {
      setIsAdmin(true);
    }
  }, [isAuthenticated]);
  return (

    <Router>
      <Container>
        <Navbar isAuthenticated={isAuthenticated} isAdmin={isAdmin} />

        <Routes>
          {/* <Route path="/" element={<Home basket={basket} />} setBasket={setBasket} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />

          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/address" element={<Address />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
          {/* <Route
            path="/add-product"
            element={
              isAuthenticated && isAdmin ? (
                <AddProduct />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          /> */}
          <Route
            path="/edit-product/:id"
            element={
              isAuthenticated && isAdmin ? (
                <EditProduct />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/delete-product/:id"
            element={
              isAuthenticated && isAdmin ? (
                <DeleteProduct />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/product-view/:id" element={<ProductDetail />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Container>

    </Router >
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
//  overflow-y: hidden;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default App;
