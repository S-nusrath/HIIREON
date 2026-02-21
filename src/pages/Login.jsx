// import { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function Login() {

//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const [email,setEmail] = useState("");
//   const [password,setPassword] = useState("");
//   const [role,setRole] = useState("user");
//   const [loading,setLoading] = useState(false);
//   const handleSubmit = (e) => {
//   e.preventDefault();

//   const userData = { email, role };

//   // fake login success
//   localStorage.setItem("user", JSON.stringify(userData));

//   // update auth context
//   login(userData);

//   // redirect to dashboard
//   navigate(role === "admin" ? "/admin" : "/", { replace:true });
// };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setLoading(true);

//   //   try {
//   //     const response = await fetch("http://localhost:8080/api/auth/login", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json"
//   //       },
//   //       body: JSON.stringify({
//   //         email,
//   //         password,
//   //         role
//   //       })
//   //     });

//   //     const data = await response.text();

//   //     if (data === "Login Successful") {

//   //       const userData = { email, role };

//   //       // save locally
//   //       localStorage.setItem("user", JSON.stringify(userData));

//   //       // update auth context (IMPORTANT)
//   //       login(userData);

//   //       // redirect
//   //       navigate(role === "admin" ? "/admin" : "/", { replace:true });

//   //     } else {
//   //       alert(data);
//   //     }

//   //   } catch (error) {
//   //     alert("Backend not connected");
//   //   }

//   //   setLoading(false);
//   // };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">

//       <form onSubmit={handleSubmit} className="bg-white p-8 shadow rounded w-80">

//         <h2 className="text-xl font-bold mb-5 text-center">
//           Sign In
//         </h2>

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full border p-2 mb-3"
//           onChange={e=>setEmail(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full border p-2 mb-3"
//           onChange={e=>setPassword(e.target.value)}
//           required
//         />

//         <select
//           className="w-full border p-2 mb-4"
//           onChange={e=>setRole(e.target.value)}
//         >
//           <option value="user">User</option>
//           <option value="admin">Admin</option>
//         </select>

//         <button
//           disabled={loading}
//           className="w-full bg-indigo-600 text-white py-2 rounded disabled:opacity-50"
//         >
//           {loading ? "Logging in..." : "Login"}
//         </button>

//       </form>

//     </div>
//   );
// }
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login(){

  const { login } = useAuth();
  const navigate = useNavigate();

  const [form,setForm] = useState({
    email:"",
    password:"",
    role:"user"
  });

  const handleChange = e =>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const handleSubmit = (e)=>{
    e.preventDefault();

    const userData = {
      email: form.email,
      role: form.role
    };

    // fake login success
    localStorage.setItem("user", JSON.stringify(userData));

    // update context
    login(userData);

    // redirect
    navigate(form.role === "admin" ? "/admin" : "/", { replace:true });
  };

  return(
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

          {/* Role */}
          <select
            name="role"
            className="w-full border p-3 rounded-lg mb-6 focus:ring-2 focus:ring-indigo-500 outline-none"
            onChange={handleChange}
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
              onClick={()=>navigate("/signup")}
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