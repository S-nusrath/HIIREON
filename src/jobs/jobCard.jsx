export default function JobCard({ job }) {

return (

<div className="border p-4 mb-4 rounded shadow">

<h2 className="text-lg font-bold">
{job.jobTitle}
</h2>

<p>
<strong>Company:</strong> {job.company}
</p>

<p>
<strong>Skills:</strong> {job.requiredSkills}
</p>

<p>
<strong>Experience:</strong> {job.experience}
</p>

</div>

);

}