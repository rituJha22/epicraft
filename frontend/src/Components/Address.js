
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";


function Address() {
  const [{ user, address }, dispatch] = useStateValue();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [flat, setFlat] = useState("");
  const [area, setArea] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const navigate = useNavigate();

  const deliver = (e) => {
    e.preventDefault();

    if (!user) {
      // alert("Please login to make payment.");
      navigate("/login");
      return;
    }

    if (!fullName || !phone) {
      alert("Please fill in your name and phone number.");
      return;
    }

    const phoneRegex = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    dispatch({
      type: "SET_ADDRESS",
      item: {
        fullName,
        phone,
        flat,
        area,
        city,
        state,
      },
    });

    navigate("/payment");
  };

  return (
    <Container>
      {/* <Navbar /> */}
      <Main>
        <FormContainer>
          <InputContainer>
            <p>Full Name</p>
            <input
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="John Smith"
              value={fullName}
              required
            />
          </InputContainer>
          <InputContainer>
            <p>Phone Number</p>
            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              required
            />
          </InputContainer>
          <InputContainer>
            <p>Flat, House no. Building, Company</p>
            <input
              type="text"
              onChange={(e) => setFlat(e.target.value)}
              value={flat}
            />
          </InputContainer>
          <InputContainer>
            <p>Area, Colony, Street</p>
            <input
              type="text"
              onChange={(e) => setArea(e.target.value)}
              value={area}
            />
          </InputContainer>
          <InputContainer>
            <p>Landmark</p>
            <input
              type="text"
              onChange={(e) => setLandmark(e.target.value)}
              value={landmark}
            />
          </InputContainer>
          <InputContainer>
            <p>Town/City</p>
            <input
              type="text"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
          </InputContainer>
          <InputContainer>
            <p>State/Province</p>
            <input
              type="text"
              onChange={(e) => setState(e.target.value)}
              value={state}
            />
          </InputContainer>

          <button onClick={deliver}>Deliver to this Address</button>
        </FormContainer>
      </Main>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  // max-width: 1400px;

  margin: auto;
  background-color: rgb(234, 237, 237);

  position: relative;
`;

const Main = styled.div`
  padding: 15px;
  
`;

const FormContainer = styled.form`
  border: 1px solid lightgray;
  
  width: 55%;
  min-width: 400px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: #fff;
  margin: auto;

  button {
    // align-self: flex-start;
    // height: 33px;
    // width: 250px;
    // margin-top: 20px;
    // // background-color: #ffa32a;
    // background-color: #0e0242;
    // color:#ffffff;
    // border: none;
    // outline: none;
    // border-radius: 5px;
    // cursor: pointer;
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
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 10px;

  p {
    font-size: 14px;
    font-weight: 600;
  }

  input {
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top: 5px;

    &:hover {
      border: 1px solid orange;
    }
  }
`;
export default Address;
