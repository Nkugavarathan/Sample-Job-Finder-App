import React from "react"
import { Link, useNavigate } from "react-router-dom"
export default function Navbar() {
  const navigate = useNavigate()
  return (
    <div className="navbar">
      <img src="" alt="" />
      <div className="navlist">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="products" className="nav-link">
          Products
        </Link>
        <Link to="about" className="nav-link">
          About
        </Link>
        <Link to="contact" className="nav-link">
          Contact
        </Link>
      </div>
      <button onClick={() => navigate("/about")}>Get Started</button>
    </div>
  )
}
