import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
import { useStateValue } from "../StateProvider";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{ }, dispatch] = useStateValue();

  const login = (e) => {
    e.preventDefault();
    axios
      .post("/auth/login", { email, password })
      .then((res) => {
        if (!res.data.error) {
          dispatch({
            type: "SET_USER",
            user: res.data,
          });
          localStorage.setItem("user", JSON.stringify(res.data));
          navigate("/");
        } else if (res.data.error) {
          alert(res.data.error);
        }
      })
      .catch((err) => console.warn(err));
  };

  return (
    <Container>
      <Logo onClick={() => navigate("/")}>
        <img src="./logo1.png" alt="Epicraft Logo" />
      </Logo>
      <FormContainer>
        <h3>Sign In</h3>
        <InputContainer>
          <p>Email address</p>
          <input
            type="email"
            placeholder="example@example.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </InputContainer>
        <InputContainer>
          <p>Password</p>
          <input
            type="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </InputContainer>
        <LoginButton onClick={login}>Sign In</LoginButton>
        <InfoText>
          By continuing, you agree to Epicraft's{" "}
          <span>Conditions of Use </span>and <span> Privacy Notice</span>.
        </InfoText>
      </FormContainer>
      <SignUpButton onClick={() => navigate("/signup")}>
        Create your Epicraft account
      </SignUpButton>
    </Container>
  );
}

const Container = styled.div`
  width: 40%;
  min-width: 450px;
  height: fit-content;
  padding: 15px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

// const Logo = styled.div`
//   width: 130px;
//   margin-bottom: 20px;
//   img {
//     width: 100%;
//   }
// `;

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
  border: 1px solid #ccc;
  width: 55%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  border-radius: 5px;
  margin-bottom: 30px;
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 10px;
  p {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    height: 50px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
    margin-top: 5
    `;

const Button = styled.button`
width: 100 %;
height: 50px;
margin - top: 20px;
border - radius: 5px;
border: none; background - color: #0077ff;
color: #fff;
font - size: 18px;
font - weight: 600;
cursor: pointer; &:hover { background - color: #006ae6; }`;


const LoginButton = styled.button`
  // background-color: #f1f1f1;
  background-color: #8d5524;
  // color: #8d5524;
  color: #ffff;
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

const InfoText = styled.p`
  font-size: 14px;
  text-align: center;
  margin-top: 20px;

  span {
    font-weight: 600;
  }
`;
const SignUpButton = styled.button`
  // background-color: #8d5524;
   background-color: #f1f1f1;
  // color: #fff;
  color: #8d5524;
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

export default Login;