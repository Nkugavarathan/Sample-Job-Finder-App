import React from "react"
import { useLoaderData } from "react-router-dom"
//import { useParams } from "react-router-dom"

export default function JobDetail() {
  //const { id } = useParams() // that route path=":id"

  const jobDetails = useLoaderData()

  return (
    <div>
      {jobDetails ? (
        <div>
          <h2>{jobDetails.title}</h2>
          <p>Salary: {jobDetails.salary}</p>
          <p>Location: {jobDetails.location}</p>
        </div>
      ) : (
        <p>Error: Job details not found.</p>
      )}
    </div>
  )
}

// export const jobDetailLoader = async ({ params }) => {
//   const { id } = params
//   const response = await fetch("http://localhost:5000/jobs/" + id)
//   return response.json()
// }

export const jobDetailLoader = async ({ params }) => {
  const { id } = params
  console.log("Fetching job details for ID:", id)

  const response = await fetch("http://localhost:5000/jobs/" + id)

  if (response.status === 404) {
    console.error("Job not found")
    throw new Error("Job not found")
  }

  if (!response.ok) {
    console.error("Failed to fetch job details")
    throw new Error("Failed to fetch job details")
  }

  const data = await response.json()
  console.log("Job details fetched:", data)

  return data
}
