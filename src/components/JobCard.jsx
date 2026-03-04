// import { Link } from "react-router-dom";

// export default function JobCard({ job }) {
//   return (
//     <div className="border p-4 rounded mb-4 shadow">

//       <h2 className="text-lg font-bold">{job.title}</h2>
//       <p>{job.company}</p>
//       <p>Experience: {job.experience}</p>

//       <p>
//         Skills: {job.skills?.join(", ")}
//       </p>

//       <Link
//         to={`/job/${job._id}`}
//         className="text-blue-500"
//       >
//         View Details
//       </Link>

//     </div>
//   );
// }
import { Link } from "react-router-dom";

export default function JobCard({job}){

return(

<div className="border p-4 mb-4 rounded shadow">

<h2 className="text-lg font-bold">{job.title}</h2>

<p>{job.company} • {job.location}</p>

<p>{job.salary}</p>

<p>Skills: {job.skills.join(", ")}</p>

<Link
to={`/job/${job.id}`}
className="text-blue-500"
>

View Details

</Link>

</div>

)

}