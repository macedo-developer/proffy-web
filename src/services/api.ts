import axios from "axios";

const url = window.location.hostname.includes("localhost")
  ? "http://localhost:3002/"
  : "https://macedo-proffy-backend.herokuapp.com";

const api = axios.create({
  baseURL: url,
});

export default api;
