import React from 'react'
import "./Navbar.css"
import NavbarLogo from "..//../assets/navbar-logo.png"

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <a href="#"><img src={NavbarLogo} alt=""/></a>
        <a href="#">Home</a>
        <a href="#about-me">About me</a>
        <a href="#Portfolio">Portfolio</a>
        <a href="#Contact">Contact</a>
    </div>
  )
}

export default Navbar
