import { useEffect, useState } from "react";
import axios from "axios";

export default function ViewApplicants() {

const [applicants,setApplicants] = useState([]);
const [search,setSearch] = useState("");

useEffect(()=>{

fetchApplicants();

},[]);

const fetchApplicants = async () => {

try{

const res = await axios.get("http://localhost:8080/api/applications");

setApplicants(res.data);

}catch(err){

console.log(err);

}

};

const updateStatus = async (id,status) => {

try{

await axios.put(`http://localhost:8080/api/applications/${id}`,{
status: status
});

fetchApplicants();

}catch(err){

console.log(err);

}

};

const filteredApplicants = applicants.filter((app)=>
app.name?.toLowerCase().includes(search.toLowerCase())
);

return(

<div className="p-8">

{/* Header */}

<div className="flex justify-between items-center mb-6">

<h1 className="text-3xl font-bold">
Applicants
</h1>

</div>

{/* Search */}

<div className="mb-6">

<input
type="text"
placeholder="Search applicants..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="border p-3 w-full rounded"
/>

</div>

{/* Table */}

<div className="bg-white shadow rounded-xl overflow-hidden">

<table className="w-full">

<thead className="bg-gray-100">

<tr>

<th className="p-4 text-left">Candidate</th>
<th className="p-4 text-left">Email</th>
<th className="p-4 text-left">Job</th>
<th className="p-4 text-left">Resume</th>
<th className="p-4 text-left">Status</th>
<th className="p-4 text-left">Actions</th>

</tr>

</thead>

<tbody>

{filteredApplicants.map((app)=>(
<tr key={app.id} className="border-t hover:bg-gray-50">

<td className="p-4 font-medium">
{app.name}
</td>

<td className="p-4">
{app.email}
</td>

<td className="p-4">
{app.jobTitle}
</td>

<td className="p-4">

<a
href={app.resume}
target="_blank"
className="text-blue-600 underline"
>
View Resume
</a>

</td>

<td className="p-4">

<span className={`px-3 py-1 rounded-full text-sm
${app.status==="Accepted"?"bg-green-100 text-green-700":
app.status==="Rejected"?"bg-red-100 text-red-700":
"bg-yellow-100 text-yellow-700"}
`}>

{app.status || "Pending"}

</span>

</td>

<td className="p-4 space-x-2">

<button
onClick={()=>updateStatus(app.id,"Accepted")}
className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
>
Accept
</button>

<button
onClick={()=>updateStatus(app.id,"Rejected")}
className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
>
Reject
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
