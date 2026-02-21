import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSignup = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:8080/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        role: "USER"
      }),
    });

   if (response.status === 409) {
  alert("Account already exists!");
} else if (response.ok) {
  alert("Account created successfully!");
  navigate("/login");
} else {
  alert("Signup failed!");
}
  } catch (error) {
    console.error("Error:", error);
    alert("Backend not connected!");
  }
};

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">

      <form onSubmit={handleSignup} className="bg-white p-8 shadow rounded w-80">

        <h2 className="text-xl font-bold mb-4 text-center">
          Sign Up
        </h2>

        <input
          placeholder="Email"
          className="w-full border p-2 mb-3"
          onChange={e=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4"
          onChange={e=>setPassword(e.target.value)}
        />

        <button className="w-full bg-indigo-600 text-white py-2 rounded">
          Create Account
        </button>

      </form>

    </div>
  );
}
