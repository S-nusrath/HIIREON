import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api", // backend url
});

export const loginUser = async (data) => {
  const res = await API.post("/auth/login", data);
  return res.data;
};