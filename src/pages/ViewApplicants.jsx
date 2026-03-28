// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function ViewApplicants() {

// const [applicants,setApplicants] = useState([]);
// const [search,setSearch] = useState("");

// useEffect(()=>{

// fetchApplicants();

// },[]);

// const fetchApplicants = async () => {

// try{

// const res = await axios.get("http://localhost:8080/api/applications");

// setApplicants(res.data);

// }catch(err){

// console.log(err);

// }

// };

// const updateStatus = async (id,status) => {

// try{

// await axios.put(`http://localhost:8080/api/applications/${id}`,{
// status: status
// });

// fetchApplicants();

// }catch(err){

// console.log(err);

// }

// };

// const filteredApplicants = applicants.filter((app)=>
// app.name?.toLowerCase().includes(search.toLowerCase())
// );

// return(

// <div className="p-8">

// {/* Header */}

// <div className="flex justify-between items-center mb-6">

// <h1 className="text-3xl font-bold">
// Applicants
// </h1>

// </div>

// {/* Search */}

// <div className="mb-6">

// <input
// type="text"
// placeholder="Search applicants..."
// value={search}
// onChange={(e)=>setSearch(e.target.value)}
// className="border p-3 w-full rounded"
// />

// </div>

// {/* Table */}

// <div className="bg-white shadow rounded-xl overflow-hidden">

// <table className="w-full">

// <thead className="bg-gray-100">

// <tr>

// <th className="p-4 text-left">Candidate</th>
// <th className="p-4 text-left">Email</th>
// <th className="p-4 text-left">Job</th>
// <th className="p-4 text-left">Resume</th>
// <th className="p-4 text-left">Status</th>
// <th className="p-4 text-left">Actions</th>

// </tr>

// </thead>

// <tbody>

// {filteredApplicants.map((app)=>(
// <tr key={app.id} className="border-t hover:bg-gray-50">

// <td className="p-4 font-medium">
// {app.name}
// </td>

// <td className="p-4">
// {app.email}
// </td>

// <td className="p-4">
// {app.jobTitle}
// </td>

// <td className="p-4">

// <a
// href={app.resume}
// target="_blank"
// className="text-blue-600 underline"
// >
// View Resume
// </a>

// </td>

// <td className="p-4">

// <span className={`px-3 py-1 rounded-full text-sm
// ${app.status==="Accepted"?"bg-green-100 text-green-700":
// app.status==="Rejected"?"bg-red-100 text-red-700":
// "bg-yellow-100 text-yellow-700"}
// `}>

// {app.status || "Pending"}

// </span>

// </td>

// <td className="p-4 space-x-2">

// <button
// onClick={()=>updateStatus(app.id,"Accepted")}
// className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
// >
// Accept
// </button>

// <button
// onClick={()=>updateStatus(app.id,"Rejected")}
// className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
// >
// Reject
// </button>

// </td>

// </tr>
// ))}

// </tbody>

// </table>

// </div>

// </div>

// );

// }


import { useState, useEffect } from "react";

export default function ViewApplicants(){

const [applications,setApplications] = useState([]);

useEffect(()=>{

const data = JSON.parse(localStorage.getItem("applications")) || [];
setApplications(data);

},[]);

const updateStatus = (index,status)=>{

let apps = [...applications];

apps[index].status = status;

localStorage.setItem("applications",JSON.stringify(apps));

setApplications(apps);

};

return(

<div className="p-6">

<h1 className="text-2xl font-bold mb-6">
Job Applications
</h1>

<table className="w-full border">

<thead className="bg-gray-200">

<tr>

<th className="p-2 border">Name</th>
<th className="p-2 border">Email</th>
<th className="p-2 border">LinkedIn</th>
<th className="p-2 border">Resume</th>
<th className="p-2 border">Status</th>
<th className="p-2 border">Action</th>

</tr>

</thead>

<tbody>

{applications.map((app,i)=>(

<tr key={i} className="text-center">

<td className="border p-2">{app.name}</td>

<td className="border p-2">{app.email}</td>

<td className="border p-2">
<a href={app.linkedin} className="text-blue-500">
Profile
</a>
</td>

<td className="border p-2">
<a href={app.resume} className="text-green-600">
Resume
</a>
</td>

<td className="border p-2">
{app.status}
</td>

<td className="border p-2 space-x-2">

<button
onClick={()=>updateStatus(i,"Accepted")}
className="bg-green-500 text-white px-3 py-1 rounded"
>
Accept
</button>

<button
onClick={()=>updateStatus(i,"Rejected")}
className="bg-red-500 text-white px-3 py-1 rounded"
>
Reject
</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

)

}