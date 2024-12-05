import React from 'react'
import "./Navbar.css"
import NavbarLogo from "..//../assets/navbar-logo.png"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='nav-logo' data-aos="fade-right" >
        <Link to="#"><img src={NavbarLogo} alt="" /></Link>
      </div>
      <div className='route' data-aos="fade-up">
        <ul>
          <li><a href="#">Home</a></li>
        </ul>
        <ul>
          <li><a href="#Services">Services</a></li>
        </ul>
        <ul>
          <li><a href="#About-me">About me</a></li>
        </ul>
        <ul>
          <li><a href="#Portfolio">Portfolio</a></li>
        </ul>
        <ul>
          <li><a href="#Contact">Contact</a></li>
        </ul>
        
      </div>

    </div>
  )
}

export default Navbar
