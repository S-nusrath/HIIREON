import { useParams } from "react-router-dom";

export default function JobTracker(){

const {id} = useParams();

const data = JSON.parse(localStorage.getItem(`job-${id}`));

return(

<div className="p-6">

<h1 className="text-2xl font-bold">
Application Status
</h1>

<p>Name: {data?.name}</p>

<p>Email: {data?.email}</p>

<p>Status: {data?.status}</p>

</div>

)

}