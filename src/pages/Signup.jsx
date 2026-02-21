// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Signup() {

//   const navigate = useNavigate();

//   const [form,setForm] = useState({
//     name:"",
//     email:"",
//     password:"",
//     role:"user"
//   });

//   const [showPass,setShowPass] = useState(false);

//   const handleChange = e =>{
//     setForm({...form,[e.target.name]:e.target.value});
//   };

//   const handleSignup = e =>{
//     e.preventDefault();

//     if(!form.name || !form.email || !form.password){
//       alert("Please fill all fields");
//       return;
//     }

//     console.log(form); // send to backend later

//     alert("Account created successfully 🚀");
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">

//       <form
//         onSubmit={handleSignup}
//         className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl rounded-2xl p-8 w-[360px] text-white"
//       >

//         <h2 className="text-3xl font-bold text-center mb-6">
//           Create Account
//         </h2>

//         {/* Name */}
//         <input
//           name="name"
//           placeholder="Full Name"
//           className="w-full p-3 mb-4 rounded-lg bg-white/20 placeholder-white outline-none focus:ring-2 focus:ring-white"
//           onChange={handleChange}
//         />

//         {/* Email */}
//         <input
//           name="email"
//           type="email"
//           placeholder="Email Address"
//           className="w-full p-3 mb-4 rounded-lg bg-white/20 placeholder-white outline-none focus:ring-2 focus:ring-white"
//           onChange={handleChange}
//         />

//         {/* Password */}
//         <div className="relative mb-4">
//           <input
//             name="password"
//             type={showPass ? "text":"password"}
//             placeholder="Password"
//             className="w-full p-3 rounded-lg bg-white/20 placeholder-white outline-none focus:ring-2 focus:ring-white"
//             onChange={handleChange}
//           />
//           <span
//             onClick={()=>setShowPass(!showPass)}
//             className="absolute right-3 top-3 cursor-pointer text-sm"
//           >
//             {showPass ? "Hide":"Show"}
//           </span>
//         </div>

//         {/* Role */}
//         <select
//           name="role"
//           className="w-full p-3 mb-6 rounded-lg bg-white/20 text-white outline-none focus:ring-2 focus:ring-white"
//           onChange={handleChange}
//         >
//           <option value="user" className="text-black">User</option>
//           <option value="recruiter" className="text-black">Recruiter</option>
//           <option value="admin" className="text-black">Admin</option>
//         </select>

//         <button className="w-full bg-white text-indigo-600 font-semibold py-3 rounded-lg hover:bg-gray-100 transition">
//           Create Account
//         </button>

//         <p className="text-center text-sm mt-5">
//           Already have an account?{" "}
//           <span
//             onClick={()=>navigate("/login")}
//             className="underline cursor-pointer"
//           >
//             Login
//           </span>
//         </p>

//       </form>

//     </div>
//   );
// }
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup(){

  const navigate = useNavigate();

  const [form,setForm] = useState({
    name:"",
    email:"",
    password:"",
    role:"user"
  });

  const handleChange = e =>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const handleSignup = e =>{
    e.preventDefault();

    if(!form.name || !form.email || !form.password){
      alert("Fill all fields");
      return;
    }

    console.log(form);
    navigate("/login");
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
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition">
            Create Account
          </button>

          <p className="text-sm text-center mt-5 text-gray-500">
            Already have an account?{" "}
            <span
              onClick={()=>navigate("/login")}
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