

import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "user" // UI only (not trusted)
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // ✅ Store JWT token
        localStorage.setItem("token", data.token);

        // ✅ Trust backend role, not dropdown
        const userData = {
          email: data.email,
          role: data.role,     // <-- backend role
        };

        localStorage.setItem("user", JSON.stringify(userData));
        login(userData);

        // ✅ Navigate based on backend role
        navigate(data.role === "ADMIN" ? "/admin" : "/", { replace: true });
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Server error");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* LEFT PANEL */}
      <div className="hidden md:flex w-1/3 bg-[#0f172a] text-white flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-2">HireOn</h1>
        <p className="text-gray-300 text-sm">
          AI Powered Hiring Platform
        </p>
      </div>

      {/* RIGHT FORM */}
      <div className="flex flex-1 justify-center items-center">

        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-2xl shadow-lg w-[380px]"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Welcome Back
          </h2>

          {/* Email */}
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full border p-3 rounded-lg mb-4 focus:ring-2 focus:ring-indigo-500 outline-none"
            onChange={handleChange}
            required
          />

          {/* Password */}
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg mb-4 focus:ring-2 focus:ring-indigo-500 outline-none"
            onChange={handleChange}
            required
          />

          {/* Role (UI only, not trusted) */}
          <select
            name="role"
            className="w-full border p-3 rounded-lg mb-6 focus:ring-2 focus:ring-indigo-500 outline-none"
            onChange={handleChange}
            value={form.role}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          {/* Button */}
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition">
            Login
          </button>

          {/* Switch */}
          <p className="text-sm text-center mt-5 text-gray-500">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-indigo-600 font-semibold cursor-pointer"
            >
              Signup
            </span>
          </p>

        </form>
      </div>
    </div>
  );
}



















