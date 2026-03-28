// import { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// export default function ApplyJob(){

// const {id} = useParams();
// const navigate = useNavigate();

// const [name,setName] = useState("");
// const [email,setEmail] = useState("");

// const handleApply = (e)=>{
// e.preventDefault();

// localStorage.setItem(
// `job-${id}`,
// JSON.stringify({name,email,status:"Applied"})
// );

// navigate(`/tracker/${id}`);
// };

// return(

// <div className="p-6">

// <h1 className="text-xl font-bold mb-4">
// Apply for Job
// </h1>

// <form onSubmit={handleApply}>

// <input
// placeholder="Name"
// value={name}
// onChange={(e)=>setName(e.target.value)}
// className="border p-2 block mb-3"
// />

// <input
// placeholder="Email"
// value={email}
// onChange={(e)=>setEmail(e.target.value)}
// className="border p-2 block mb-3"
// />

// <button className="bg-green-500 text-white px-4 py-2">
// Submit Application
// </button>

// </form>

// </div>

// )

// }

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ApplyJob() {

const { id } = useParams();
const navigate = useNavigate();

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [linkedin,setLinkedin] = useState("");
const [resume,setResume] = useState("");

const handleApply = (e) => {

e.preventDefault();

const application = {
jobId:id,
name,
email,
linkedin,
resume,
status:"Applied"
};

let applications = JSON.parse(localStorage.getItem("applications")) || [];

applications.push(application);

localStorage.setItem("applications",JSON.stringify(applications));

localStorage.setItem(`job-${id}`,JSON.stringify(application));

alert("Application Submitted ✅");

navigate(`/tracker/${id}`);

};

return(

<div className="max-w-lg mx-auto p-6 bg-white shadow rounded">

<h1 className="text-2xl font-bold mb-6">
Apply for Job
</h1>

<form onSubmit={handleApply} className="space-y-4">

<input
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="border p-3 w-full rounded"
/>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="border p-3 w-full rounded"
/>

<input
placeholder="LinkedIn Profile"
value={linkedin}
onChange={(e)=>setLinkedin(e.target.value)}
className="border p-3 w-full rounded"
/>

<input
placeholder="Resume Link (Google Drive)"
value={resume}
onChange={(e)=>setResume(e.target.value)}
className="border p-3 w-full rounded"
/>

<button className="bg-green-600 text-white px-4 py-3 rounded w-full hover:bg-green-700">
Submit Application
</button>

</form>

</div>

);

}