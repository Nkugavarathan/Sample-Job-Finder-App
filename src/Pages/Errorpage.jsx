import React from "react"
import { useNavigate } from "react-router-dom"

export default function Errorpage() {
  const navigate = useNavigate()
  return (
    <div>
      <h2>404 Error</h2>
      <button onClick={() => navigate("/")}>Goto Home</button>
    </div>
  )
}
