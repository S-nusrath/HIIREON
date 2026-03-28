import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api"
});

export const applyJob = async (userId, jobId) => {
  const res = await API.post("/applications/apply", {
    userId,
    jobId
  });
  return res.data;
};