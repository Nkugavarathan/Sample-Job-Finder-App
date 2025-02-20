import React from "react"
import { Link } from "react-router-dom"
export default function Navbar() {
  return (
    <div className="navbar">
      <img src="" alt="" />
      <div className="navlist">
        <Link to="/">
          <a href="">Home</a>{" "}
        </Link>
        <Link to="products">
          <a href="">Products</a>
        </Link>
        <Link to="about">
          <a href="about">About</a>
        </Link>
        <Link to="contact">
          <a href="contact">Contact</a>
        </Link>
      </div>
      <button>Get Started</button>
    </div>
  )
}
