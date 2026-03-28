import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api"
});

export const getJobs = async () => {
  const res = await API.get("/jobs");
  return res.data;
};