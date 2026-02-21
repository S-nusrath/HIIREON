import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const { login } = useAuth();
  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [role,setRole] = useState("user");

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   login(email,password,role);

  //   if(role === "admin") navigate("/admin");
  //   else navigate("/");
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password,
        role
      })
    });

    const data = await response.text();

    if (data === "Login Successful") {

      localStorage.setItem("user", JSON.stringify({
        email,
        role
      }));

      if (role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }

    } else {
      alert(data);  // 🔥 show error message from backend
    }

  } catch (error) {
    alert("Error connecting to backend");
  }
};
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">

      <form onSubmit={handleSubmit} className="bg-white p-8 shadow rounded w-80">

        <h2 className="text-xl font-bold mb-5 text-center">
          Sign In
        </h2>

        <input
          placeholder="Email"
          className="w-full border p-2 mb-3"
          onChange={e=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3"
          onChange={e=>setPassword(e.target.value)}
        />

        {/* ROLE SELECT */}
        <select
          className="w-full border p-2 mb-4"
          onChange={e=>setRole(e.target.value)}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button className="w-full bg-indigo-600 text-white py-2 rounded">
          Login
        </button>

      </form>

    </div>
  );
}
