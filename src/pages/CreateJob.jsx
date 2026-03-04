import { useState } from "react";

export default function CreateJob(){

const [title,setTitle] = useState("");
const [company,setCompany] = useState("");
const [skills,setSkills] = useState("");
const [experience,setExperience] = useState("");

const handleSubmit=(e)=>{

e.preventDefault();

console.log({
title,
company,
skills:skills.split(","),
experience
});

alert("Job Created!");

}

return(

<div className="p-6">

<h1 className="text-xl font-bold mb-4">
Create Job
</h1>

<form onSubmit={handleSubmit} className="space-y-3">

<input
placeholder="Job Title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
className="border p-2 w-full"
/>

<input
placeholder="Company"
value={company}
onChange={(e)=>setCompany(e.target.value)}
className="border p-2 w-full"
/>

<input
placeholder="Required Skills (React,Node)"
value={skills}
onChange={(e)=>setSkills(e.target.value)}
className="border p-2 w-full"
/>

<select
value={experience}
onChange={(e)=>setExperience(e.target.value)}
className="border p-2 w-full"
>

<option value="">Select Experience</option>
<option value="0-1 years">0-1 Years</option>
<option value="1-3 years">1-3 Years</option>
<option value="3-5 years">3-5 Years</option>

</select>

<button className="bg-blue-500 text-white px-4 py-2">
Create Job
</button>

</form>

</div>

)

}