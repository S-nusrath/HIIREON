import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ManageJobs() {

const [jobs,setJobs] = useState([]);
const [search,setSearch] = useState("");

useEffect(()=>{

fetchJobs();

},[]);

const fetchJobs = async () => {

try{

const res = await axios.get("http://localhost:8080/api/jobs");

setJobs(res.data);

}catch(err){

console.log(err);

}

};

const deleteJob = async (id) => {

if(!window.confirm("Delete this job?")) return;

try{

await axios.delete(`http://localhost:8080/api/jobs/${id}`);

fetchJobs();

}catch(err){

console.log(err);

}

};

const filteredJobs = jobs.filter((job)=>
job.title?.toLowerCase().includes(search.toLowerCase())
);

return(

<div className="p-8">

{/* Header */}
<div className="flex justify-between items-center mb-6">

<h1 className="text-3xl font-bold">
Manage Jobs
</h1>

<Link
to="/admin/create-job"
className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
>
+ Create Job
</Link>

</div>

{/* Search */}
<div className="mb-6">

<input
type="text"
placeholder="Search jobs..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="border p-3 w-full rounded"
/>

</div>

{/* Jobs Table */}
<div className="bg-white shadow rounded-xl overflow-hidden">

<table className="w-full">

<thead className="bg-gray-100">

<tr>

<th className="text-left p-4">Job Title</th>
<th className="text-left p-4">Company</th>
<th className="text-left p-4">Experience</th>
<th className="text-left p-4">Status</th>
<th className="text-left p-4">Actions</th>

</tr>

</thead>

<tbody>

{filteredJobs.map((job)=>(
<tr key={job.id} className="border-t hover:bg-gray-50">

<td className="p-4 font-medium">
{job.title}
</td>

<td className="p-4">
{job.company}
</td>

<td className="p-4">
{job.experience}
</td>

<td className="p-4">

<span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
Active
</span>

</td>

<td className="p-4 space-x-3">

<button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
Edit
</button>

<button
onClick={()=>deleteJob(job.id)}
className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
>
Delete
</button>

</td>

</tr>
))}

</tbody>

</table>

</div>

</div>

);

}
