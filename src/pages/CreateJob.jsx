// import { useState } from "react";

// export default function CreateJob(){

// const [title,setTitle] = useState("");
// const [company,setCompany] = useState("");
// const [skills,setSkills] = useState("");
// const [experience,setExperience] = useState("");

// const handleSubmit=(e)=>{

// e.preventDefault();

// console.log({
// title,
// company,
// skills:skills.split(","),
// experience
// });

// alert("Job Created!");

// }

// return(

// <div className="p-6">

// <h1 className="text-xl font-bold mb-4">
// Create Job
// </h1>

// <form onSubmit={handleSubmit} className="space-y-3">

// <input
// placeholder="Job Title"
// value={title}
// onChange={(e)=>setTitle(e.target.value)}
// className="border p-2 w-full"
// />

// <input
// placeholder="Company"
// value={company}
// onChange={(e)=>setCompany(e.target.value)}
// className="border p-2 w-full"
// />

// <input
// placeholder="Required Skills (React,Node)"
// value={skills}
// onChange={(e)=>setSkills(e.target.value)}
// className="border p-2 w-full"
// />

// <select
// value={experience}
// onChange={(e)=>setExperience(e.target.value)}
// className="border p-2 w-full"
// >

// <option value="">Select Experience</option>
// <option value="0-1 years">0-1 Years</option>
// <option value="1-3 years">1-3 Years</option>
// <option value="3-5 years">3-5 Years</option>

// </select>

// <button className="bg-blue-500 text-white px-4 py-2">
// Create Job
// </button>

// </form>

// </div>

// )

// }

// import { useState } from "react";
// import axios from "axios";

// export default function CreateJob(){

// const [title,setTitle] = useState("");
// const [company,setCompany] = useState("");
// const [skills,setSkills] = useState("");
// const [experience,setExperience] = useState("");

// const handleSubmit = async (e) => {

// e.preventDefault();

// const jobData = {
// jobTitle: title,
// company: company,
// requiredSkills: skills,
// experience: experience
// };

// try{

// const res = await axios.post(
// "http://localhost:8080/api/jobs",
// jobData
// );

// console.log(res.data);

// alert("Job Created Successfully ✅");

// // reset form
// setTitle("");
// setCompany("");
// setSkills("");
// setExperience("");

// }catch(error){

// console.error(error);
// alert("Error creating job");

// }

// };

// return(

// <div className="p-6">

// <h1 className="text-xl font-bold mb-4">
// Create Job
// </h1>

// <form onSubmit={handleSubmit} className="space-y-3">

// <input
// placeholder="Job Title"
// value={title}
// onChange={(e)=>setTitle(e.target.value)}
// className="border p-2 w-full"
// />

// <input
// placeholder="Company"
// value={company}
// onChange={(e)=>setCompany(e.target.value)}
// className="border p-2 w-full"
// />

// <input
// placeholder="Required Skills (React,Node)"
// value={skills}
// onChange={(e)=>setSkills(e.target.value)}
// className="border p-2 w-full"
// />

// <select
// value={experience}
// onChange={(e)=>setExperience(e.target.value)}
// className="border p-2 w-full"
// >

// <option value="">Select Experience</option>
// <option value="0-1 years">0-1 Years</option>
// <option value="1-3 years">1-3 Years</option>
// <option value="3-5 years">3-5 Years</option>

// </select>

// <button className="bg-blue-500 text-white px-4 py-2">
// Create Job
// </button>

// </form>

// </div>

// )

// }
import { useState } from "react";
import axios from "axios";

export default function CreateJob() {

const [formData, setFormData] = useState({
title: "",
company: "",
location: "",
jobType: "",
experience: "",
salaryMin: "",
salaryMax: "",
skills: "",
description: "",
openings: "",
deadline: ""
});

const [loading,setLoading] = useState(false);

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value
});
};

const handleSubmit = async (e) => {

e.preventDefault();
setLoading(true);

try{

await axios.post(
"http://localhost:8080/api/jobs",
formData
);

alert("Job Created Successfully ✅");

setFormData({
title:"",
company:"",
location:"",
jobType:"",
experience:"",
salaryMin:"",
salaryMax:"",
skills:"",
description:"",
openings:"",
deadline:""
});

}catch(err){

console.log(err);
alert("Error creating job ❌");

}

setLoading(false);

};

return(

<div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl">

<h1 className="text-2xl font-bold mb-6">
Create New Job
</h1>

<form onSubmit={handleSubmit} className="space-y-4">

{/* Job Title */}
<input
name="title"
placeholder="Job Title"
value={formData.title}
onChange={handleChange}
className="border p-3 w-full rounded"
/>

{/* Company */}
<input
name="company"
placeholder="Company Name"
value={formData.company}
onChange={handleChange}
className="border p-3 w-full rounded"
/>

{/* Location */}
<input
name="location"
placeholder="Location (Remote / Hyderabad)"
value={formData.location}
onChange={handleChange}
className="border p-3 w-full rounded"
/>

{/* Job Type */}
<select
name="jobType"
value={formData.jobType}
onChange={handleChange}
className="border p-3 w-full rounded"
>

<option value="">Select Job Type</option>
<option value="Full Time">Full Time</option>
<option value="Part Time">Part Time</option>
<option value="Internship">Internship</option>
<option value="Contract">Contract</option>

</select>

{/* Experience */}
<select
name="experience"
value={formData.experience}
onChange={handleChange}
className="border p-3 w-full rounded"
>

<option value="">Select Experience</option>
<option value="0-1 Years">0-1 Years</option>
<option value="1-3 Years">1-3 Years</option>
<option value="3-5 Years">3-5 Years</option>
<option value="5+ Years">5+ Years</option>

</select>

{/* Salary */}
<div className="flex gap-3">

<input
name="salaryMin"
placeholder="Min Salary"
value={formData.salaryMin}
onChange={handleChange}
className="border p-3 w-full rounded"
/>

<input
name="salaryMax"
placeholder="Max Salary"
value={formData.salaryMax}
onChange={handleChange}
className="border p-3 w-full rounded"
/>

</div>

{/* Skills */}
<input
name="skills"
placeholder="Required Skills (React, Node, MongoDB)"
value={formData.skills}
onChange={handleChange}
className="border p-3 w-full rounded"
/>

{/* Openings */}
<input
name="openings"
placeholder="Number of Openings"
value={formData.openings}
onChange={handleChange}
className="border p-3 w-full rounded"
/>

{/* Deadline */}
<input
type="date"
name="deadline"
value={formData.deadline}
onChange={handleChange}
className="border p-3 w-full rounded"
/>

{/* Description */}
<textarea
name="description"
placeholder="Job Description"
value={formData.description}
onChange={handleChange}
rows="4"
className="border p-3 w-full rounded"
/>

{/* Button */}
<button
className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded w-full"
>

{loading ? "Creating Job..." : "Create Job"}

</button>

</form>

</div>

);

}
