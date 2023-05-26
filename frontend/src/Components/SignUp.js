import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "../axios";

function SignUp() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = (e) => {
    e.preventDefault();
    axios
      .post("/auth/signup", { email, password, fullName })
      .then((res) => alert(res.data.message))
      .catch((err) => console.warn(err));

    navigate("/login");
  };

  return (
    <Container>
      <Logo>
        <img src="./logo1.png" alt="Logo" />
      </Logo>
      <FormContainer>
        <h3>Create Account</h3>
        <InputContainer>
          <p>Full Name</p>
          <input
            type="text"
            placeholder="Enter your full name"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          />
        </InputContainer>
        <InputContainer>
          <p>Email</p>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </InputContainer>
        <InputContainer>
          <p>Password</p>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </InputContainer>
        <SignUpButton onClick={signup}>Create Account</SignUpButton>
      </FormContainer>
      <LoginButton onClick={() => navigate("/login")}>
        Back to Login
      </LoginButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // background-color: #f5d5a6;
  padding: 40px;
`;

const Logo = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #8d5524;
  margin-bottom: 30px;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-color:#f5d5a6;
  border-radius: 20px;
  padding: 40px;
  width: 100%;
  max-width: 500px;
`;

const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;

  p {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #8d5524;
  }

  input {
    width: 100%;
    height: 40px;
    padding: 10px;
    border-radius: 10px;
    border: none;
    background-color: #f1f1f1;
    font-size: 18px;
    color: #8d5524;
    font-weight: 600;

    &:focus {
      outline: none;
     
      box-shadow: 0 0 5px #8d5524;
    }
    }
    `;
const SignUpButton = styled.button`
  background-color: #8d5524;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 600;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #6d4311;
  }
`;

const LoginButton = styled.button`
  background-color: #f1f1f1;
  color: #8d5524;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 600;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #d5d5d5;
  }
`;

export default SignUp;