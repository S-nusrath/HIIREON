import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function JobDetails(){

const { id } = useParams();
const [job, setJob] = useState(null);

useEffect(()=>{

axios.get(`http://localhost:8080/api/jobs`)
.then(res => {

const selectedJob = res.data.find(j => j.id === Number(id));
setJob(selectedJob);

})
.catch(err => console.log(err));

},[id]);

if(!job){
return <p className="p-6">Loading job details...</p>;
}

return(

<div className="p-6">

<h1 className="text-2xl font-bold mb-2">
{job.title}
</h1>

<p className="text-gray-600 mb-3">
{job.company} • {job.location}
</p>

<p className="mb-2">
<strong>Experience:</strong> {job.experience}
</p>

<p className="mb-2">
<strong>Job Type:</strong> {job.jobType}
</p>

<p className="mb-2">
<strong>Salary:</strong> {job.salaryMin} - {job.salaryMax}
</p>

<p className="mb-2">
<strong>Skills:</strong> {job.skills}
</p>

<p className="mb-2">
<strong>Openings:</strong> {job.openings}
</p>

<p className="mb-2">
<strong>Deadline:</strong> {job.deadline}
</p>

<div className="mt-4">
<strong>Description:</strong>
<p className="mt-1">{job.description}</p>
</div>

<Link
to={`/apply/${job.id}`}
className="bg-blue-500 text-white px-4 py-2 mt-4 inline-block rounded"
>
Apply Now
</Link>

</div>

);

}