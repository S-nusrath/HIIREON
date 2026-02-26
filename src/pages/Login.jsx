

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

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Login() {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:8080/api/auth/login",
//         {
//           email,
//           password
//         }
//       );

//       const token = response.data.token;

//       if (token) {
//         localStorage.setItem("token", token);
//         navigate("/profile");
//       } else {
//         alert("Login failed: No token received");
//       }

//     } catch (error) {
//       console.error("Login error:", error);
//       alert("Invalid email or password");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-[400px]">

//         <h2 className="text-2xl font-bold mb-6 text-center">
//           Login
//         </h2>

//         <form onSubmit={handleLogin} className="space-y-4">

//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full border p-2 rounded"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full border p-2 rounded"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <button
//             type="submit"
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
//           >
//             Login
//           </button>

//         </form>

//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   try {
//   //     const response = await axios.post(
//   //       "http://localhost:8080/api/auth/login",
//   //       formData
//   //     );

//   //     // store token
//   //      localStorage.setItem("token", response.data.token);

//   //     //  redirect to profile
//   //     navigate("/profile");

//   //   } catch (error) {
//   //     alert("Invalid Credentials");
//   //   }
//   // };

// //   const handleSubmit = async (e) => {
// //   e.preventDefault();

// //   try {
// //     const response = await axios.post(
// //       "http://localhost:8080/api/auth/login",
// //       formData
// //     );

// //     console.log(response.data); // 👈 ADD THIS FOR DEBUG

// //     // Store everything
// //     localStorage.setItem("token", response.data.token);
// //     localStorage.setItem("role", response.data.role);
// //     localStorage.setItem("email", response.data.email);

// //     // Redirect based on role
// //     if (response.data.role === "ADMIN") {
// //       navigate("/admin");
// //     } else {
// //       navigate("/");
// //     }

// //   } catch (error) {
// //     console.error(error);
// //     alert("Invalid Credentials");
// //   }
// // };

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const response = await axios.post(
//       "http://localhost:8080/api/auth/login",
//       formData
//     );

//     console.log("LOGIN SUCCESS:", response.data);

//     localStorage.setItem("token", response.data.token);
//     localStorage.setItem("role", response.data.role);
//     localStorage.setItem("email", response.data.email);

//     console.log("Stored Token:", localStorage.getItem("token"));
//     console.log("Stored Role:", localStorage.getItem("role"));

//     if (response.data.role === "ADMIN") {
//       navigate("/admin");
//     } else {
//       navigate("/");
//     }

//   } catch (error) {
//     console.log("LOGIN ERROR:", error);
//     alert("Invalid Credentials");
//   }
// };
//   return (
//     <div className="flex h-screen">
      
//       {/* Left Side */}
//       <div className="w-1/3 bg-[#0A1A3A] flex items-center justify-center">
//         <div>
//           <h1 className="text-white text-4xl font-bold">HireOn</h1>
//           <p className="text-gray-300 mt-2">
//             AI Powered Hiring Platform
//           </p>
//         </div>
//       </div>

//       {/* Right Side */}
//       <div className="w-3/4 flex items-center justify-center bg-gray-100">
//         <div className="bg-white p-10 rounded-xl shadow-lg w-96">

//           <h2 className="text-2xl font-bold mb-6 text-center">
//             Welcome Back
//           </h2>

//           <form onSubmit={handleSubmit}>

//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full mb-4 p-3 border rounded-lg"
//               required
//             />

//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full mb-6 p-3 border rounded-lg"
//               required
//             />

//             <button
//               type="submit"
//               className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition"
//             >
//               Login
//             </button>

//           </form>

//           <p className="mt-4 text-center">
//             Don't have an account?{" "}
//             <Link to="/signup" className="text-indigo-600 font-semibold">
//               Signup
//             </Link>
//           </p>

//         </div>
//       </div>

//     </div>
//   );
// };

// export default Login;
















// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";
// import { useAuth } from "../context/AuthContext"; // 👈 add this

// const Login = () => {
//   const navigate = useNavigate();
// const { login } = useAuth(); // 👈 add this
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const response = await axios.post(
//       "http://localhost:8080/api/auth/login",
//       formData
//     );

//     const { token, user } = response.data;

//     localStorage.setItem("token", token);
//     localStorage.setItem("user", JSON.stringify(user));

//     login(user); // 👈 THIS was missing

//     if (user.role === "ADMIN") {
//       navigate("/admin");
//     } else {
//       navigate("/dashboard");
//     }

//   } catch (error) {
//     console.log("LOGIN ERROR:", error.response?.data || error);
//     alert("Invalid Credentials");
//   }
// };

//   return (
//     <div className="flex h-screen">
      
//       {/* Left Side */}
//       <div className="w-1/3 bg-[#0A1A3A] flex items-center justify-center">
//         <div>
//           <h1 className="text-white text-4xl font-bold">HireOn</h1>
//           <p className="text-gray-300 mt-2">
//             AI Powered Hiring Platform
//           </p>
//         </div>
//       </div>

//       {/* Right Side */}
//       <div className="w-3/4 flex items-center justify-center bg-gray-100">
//         <div className="bg-white p-10 rounded-xl shadow-lg w-96">

//           <h2 className="text-2xl font-bold mb-6 text-center">
//             Welcome Back
//           </h2>

//           <form onSubmit={handleSubmit}>

//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full mb-4 p-3 border rounded-lg"
//               required
//             />

//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full mb-6 p-3 border rounded-lg"
//               required
//             />

//             <button
//               type="submit"
//               className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition"
//             >
//               Login
//             </button>

//           </form>

//           <p className="mt-4 text-center">
//             Don't have an account?{" "}
//             <Link to="/signup" className="text-indigo-600 font-semibold">
//               Signup
//             </Link>
//           </p>

//         </div>
//       </div>

//     </div>
//   );
// };

// export default Login;