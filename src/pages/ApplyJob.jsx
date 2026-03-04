import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ApplyJob(){

const {id} = useParams();
const navigate = useNavigate();

const [name,setName] = useState("");
const [email,setEmail] = useState("");

const handleApply = (e)=>{
e.preventDefault();

localStorage.setItem(
`job-${id}`,
JSON.stringify({name,email,status:"Applied"})
);

navigate(`/tracker/${id}`);
};

return(

<div className="p-6">

<h1 className="text-xl font-bold mb-4">
Apply for Job
</h1>

<form onSubmit={handleApply}>

<input
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="border p-2 block mb-3"
/>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="border p-2 block mb-3"
/>

<button className="bg-green-500 text-white px-4 py-2">
Submit Application
</button>

</form>

</div>

)

}