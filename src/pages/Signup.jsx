import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user", // UI role
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert("Fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
          role: form.role.toUpperCase(), // BACKEND expects USER / ADMIN
        }),
      });

      if (response.status === 409) {
        alert("Account already exists!");
      } else if (response.ok) {
        alert("Account created successfully!");
        navigate("/login");
      } else {
        const msg = await response.text();
        alert("Signup failed: " + msg);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Backend not connected! Is Spring Boot running?");
    } finally {
      setLoading(false);
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
          onSubmit={handleSignup}
          className="bg-white p-10 rounded-2xl shadow-lg w-[380px]"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Create Account
          </h2>

          {/* Name */}
          <input
            name="name"
            placeholder="Full Name"
            className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:ring-2 focus:ring-indigo-500 outline-none"
            onChange={handleChange}
          />

          {/* Email */}
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:ring-2 focus:ring-indigo-500 outline-none"
            onChange={handleChange}
          />

          {/* Password */}
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:ring-2 focus:ring-indigo-500 outline-none"
            onChange={handleChange}
          />

          {/* Role */}
          <select
            name="role"
            className="w-full border border-gray-300 p-3 rounded-lg mb-6 focus:ring-2 focus:ring-indigo-500 outline-none"
            onChange={handleChange}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          {/* Button */}
          <button
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition disabled:opacity-60"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>

          <p className="text-sm text-center mt-5 text-gray-500">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-indigo-600 font-semibold cursor-pointer"
            >
              Login
            </span>
          </p>

        </form>
      </div>
    </div>
  );
}