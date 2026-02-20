import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSignup = e => {
    e.preventDefault();

    // fake signup logic
    if(email && password){
      alert("Account created successfully!");
      navigate("/login");
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
