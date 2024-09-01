import React from 'react'
import "./Navbar.css"
import NavbarLogo from "..//../assets/navbar-logo.png"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <Link to="#"><img src={NavbarLogo} alt=""/></Link>
        <a href="#">Home</a>
        <a href="#About-me">About me</a>
        <a href="#Portfolio">Portfolio</a>
        <a href="#Contact">Contact</a>
    </div>
  )
}

export default Navbar
