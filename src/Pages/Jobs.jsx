import React from "react"
import { useLoaderData, Link } from "react-router-dom"

export default function Jobs() {
  const jobsData = useLoaderData()
  if (!jobsData || !jobsData.jobs) {
    return <div>No jobs available</div>
  }
  return (
    <div>
      {jobsData.jobs.map((job) => (
        <Link key={job.id} to={`/jobs/${job.id}`}>
          <h3>{job.title}</h3>
        </Link>
      ))}
    </div>
  )
}

export const jobsLoader = async () => {
  let response = await fetch("http://localhost:5000/jobs")
  if (!response.ok) {
    throw new Error("Failed to fetch jobs")
  }
  const data = await response.json()
  console.log(data) // Log the fetched data
  return data
}
