import { Link } from "react-router-dom";

export default function JobCard({ job }) {

return(

<div className="border p-4 mb-4 rounded shadow">

<h2 className="text-lg font-bold">{job.title}</h2>

<p>{job.company} • {job.location}</p>

<p>Experience: {job.experience}</p>

<p>Salary: {job.salaryMin} - {job.salaryMax}</p>

<p>Skills: {job.skills}</p>

<div className="flex gap-4 mt-3">

<Link
to={`/job/${job.id}`}
className="text-blue-500"
>
View Details
</Link>

<Link
to={`/apply/${job.id}`}
className="bg-green-500 text-white px-4 py-1 rounded"
>
Apply
</Link>

</div>

</div>

)

}