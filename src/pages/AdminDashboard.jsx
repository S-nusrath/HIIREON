// // export default function AdminDashboard(){
// //   return (
// //     <div className="p-10 text-2xl font-bold">
// //       Admin Dashboard 👑
// //     </div>
// //   );
// // }
// import { Link } from "react-router-dom";

// export default function AdminDashboard(){

// return(

// <div className="p-6">

// <h1 className="text-2xl font-bold mb-6">
// Recruiter Dashboard
// </h1>

// <div className="space-y-4">

// <Link
// to="/admin/create-job"
// className="block bg-blue-500 text-white p-3 rounded"
// >
// Create Job
// </Link>

// <Link
// to="/admin/jobs"
// className="block bg-green-500 text-white p-3 rounded"
// >
// Manage Jobs
// </Link>

// <Link
// to="/admin/applicants"
// className="block bg-purple-500 text-white p-3 rounded"
// >
// View Applicants
// </Link>

// </div>

// </div>

// )

// }
// import { Link } from "react-router-dom";

// export default function AdminDashboard() {

// return (

// <div className="flex min-h-screen bg-gray-100">

// {/* Sidebar */}
// <div className="w-64 bg-black text-white p-6">

// <h2 className="text-2xl font-bold mb-10">
// Hireon Admin
// </h2>

// <nav className="space-y-4">

// <Link
// to="/admin/dashboard"
// className="block hover:text-blue-400"
// >
// Dashboard
// </Link>

// <Link
// to="/admin/create-job"
// className="block hover:text-blue-400"
// >
// Create Job
// </Link>

// <Link
// to="/admin/jobs"
// className="block hover:text-blue-400"
// >
// Manage Jobs
// </Link>

// <Link
// to="/admin/applicants"
// className="block hover:text-blue-400"
// >
// Applicants
// </Link>

// <Link
// to="/admin/settings"
// className="block hover:text-blue-400"
// >
// Settings
// </Link>

// </nav>

// </div>

// {/* Main Content */}
// <div className="flex-1 p-8">

// {/* Header */}
// <div className="flex justify-between items-center mb-8">

// <h1 className="text-3xl font-bold">
// Recruiter Dashboard
// </h1>

// <button className="bg-black text-white px-4 py-2 rounded">
// Admin
// </button>

// </div>

// {/* Stats Cards */}
// <div className="grid grid-cols-4 gap-6 mb-10">

// <div className="bg-white p-6 rounded-xl shadow">
// <h3 className="text-gray-500">Total Jobs</h3>
// <p className="text-3xl font-bold mt-2">24</p>
// </div>

// <div className="bg-white p-6 rounded-xl shadow">
// <h3 className="text-gray-500">Active Jobs</h3>
// <p className="text-3xl font-bold mt-2">18</p>
// </div>

// <div className="bg-white p-6 rounded-xl shadow">
// <h3 className="text-gray-500">Applications</h3>
// <p className="text-3xl font-bold mt-2">132</p>
// </div>

// <div className="bg-white p-6 rounded-xl shadow">
// <h3 className="text-gray-500">Hired</h3>
// <p className="text-3xl font-bold mt-2">9</p>
// </div>

// </div>

// {/* Quick Actions */}
// <div className="grid grid-cols-3 gap-6">

// <Link
// to="/admin/create-job"
// className="bg-blue-600 text-white p-6 rounded-xl shadow hover:bg-blue-700"
// >
// <h2 className="text-xl font-bold">
// Create Job
// </h2>

// <p className="text-sm mt-2">
// Post a new job opening
// </p>

// </Link>

// <Link
// to="/admin/jobs"
// className="bg-green-600 text-white p-6 rounded-xl shadow hover:bg-green-700"
// >

// <h2 className="text-xl font-bold">
// Manage Jobs
// </h2>

// <p className="text-sm mt-2">
// Edit or delete jobs
// </p>

// </Link>

// <Link
// to="/admin/applicants"
// className="bg-purple-600 text-white p-6 rounded-xl shadow hover:bg-purple-700"
// >

// <h2 className="text-xl font-bold">
// View Applicants
// </h2>

// <p className="text-sm mt-2">
// See candidate applications
// </p>

// </Link>

// </div>

// </div>

// </div>

// );

// }
import { Link, useNavigate } from "react-router-dom";

export default function AdminDashboard() {

const navigate = useNavigate();

/* Fake login check (replace later with real auth) */
const isLoggedIn = localStorage.getItem("token");

const handleLogout = () => {

localStorage.removeItem("token");

navigate("/login");

};

return (

<div className="flex min-h-screen bg-gray-100">

{/* Sidebar */}
<div className="w-64 bg-black text-white p-6">

<h2 className="text-2xl font-bold mb-10">
Hireon Admin
</h2>

<nav className="space-y-4">

<Link
to="/admin"
className="block hover:text-blue-400"
>
Dashboard
</Link>

<Link
to="/admin/create-job"
className="block hover:text-blue-400"
>
Create Job
</Link>

<Link
to="/admin/jobs"
className="block hover:text-blue-400"
>
Manage Jobs
</Link>

<Link
to="/admin/applicants"
className="block hover:text-blue-400"
>
Applicants
</Link>

<Link
to="/admin/settings"
className="block hover:text-blue-400"
>
Settings
</Link>

</nav>

</div>

{/* Main Content */}
<div className="flex-1 p-8">

{/* Header */}
<div className="flex justify-between items-center mb-8">

<h1 className="text-3xl font-bold">
Recruiter Dashboard
</h1>

<div className="flex gap-3">

{isLoggedIn ? (

<button
onClick={handleLogout}
className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
>
Logout
</button>

) : (

<Link
to="/login"
className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
>
Sign In
</Link>

)}

</div>

</div>

{/* Stats Cards */}
<div className="grid grid-cols-4 gap-6 mb-10">

<div className="bg-white p-6 rounded-xl shadow">
<h3 className="text-gray-500">Total Jobs</h3>
<p className="text-3xl font-bold mt-2">24</p>
</div>

<div className="bg-white p-6 rounded-xl shadow">
<h3 className="text-gray-500">Active Jobs</h3>
<p className="text-3xl font-bold mt-2">18</p>
</div>

<div className="bg-white p-6 rounded-xl shadow">
<h3 className="text-gray-500">Applications</h3>
<p className="text-3xl font-bold mt-2">132</p>
</div>

<div className="bg-white p-6 rounded-xl shadow">
<h3 className="text-gray-500">Hired</h3>
<p className="text-3xl font-bold mt-2">9</p>
</div>

</div>

{/* Quick Actions */}
<div className="grid grid-cols-3 gap-6">

<Link
to="/admin/create-job"
className="bg-blue-600 text-white p-6 rounded-xl shadow hover:bg-blue-700"
>
<h2 className="text-xl font-bold">
Create Job
</h2>

<p className="text-sm mt-2">
Post a new job opening
</p>

</Link>

<Link
to="/admin/jobs"
className="bg-green-600 text-white p-6 rounded-xl shadow hover:bg-green-700"
>

<h2 className="text-xl font-bold">
Manage Jobs
</h2>

<p className="text-sm mt-2">
Edit or delete jobs
</p>

</Link>

<Link
to="/admin/applicants"
className="bg-purple-600 text-white p-6 rounded-xl shadow hover:bg-purple-700"
>

<h2 className="text-xl font-bold">
View Applicants
</h2>

<p className="text-sm mt-2">
See candidate applications
</p>

</Link>

</div>

</div>

</div>

);

}
