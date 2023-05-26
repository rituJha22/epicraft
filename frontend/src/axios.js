import axios from "axios";


const instance = axios.create({
  // baseURL: "https://amazon-backend-app.herokuapp.com",
  baseURL: "http://localhost:8000",
  // baseURL: "https://epicraft-backend.onrender.com"
  // baseURL: process.env.BASE_URL,
});

export default instance;
