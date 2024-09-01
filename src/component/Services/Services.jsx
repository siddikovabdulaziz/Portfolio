import React from 'react'
import "./Services.css"

// //;icons
// import { BsVectorPen } from "react-icons/bs";
// import { TiThMenu } from "react-icons/ti";
// import { FaDelicious } from "react-icons/fa";
// import { FaCode } from "react-icons/fa6";
// import { FaDisplay } from "react-icons/fa6";
// import { MdAutoAwesomeMotion } from "react-icons/md";

const Services = () => {
  return (
    <div class="services-container">
        <div className='buttom-container'>
          <div class="skills-container">
        <div class="skill-card">
          <i class="fas fa-pencil-alt"></i>
          <p>Product Design</p>
        </div>
        <div class="skill-card">
          <i class="fas fa-pencil-ruler"></i>
          <p>UX/UI Design</p>
        </div>
        <div class="skill-card">
          <i class="fas fa-icons"></i>
          <p>Icon Design</p>
        </div>
        <div class="skill-card">
          <i class="fas fa-drafting-compass"></i>
          <p>Logo Design</p>
        </div>
        <div class="skill-card">
          <i class="fas fa-code"></i>
          <p>Backend</p>
        </div>
        <div class="skill-card">
          <i class="fas fa-desktop"></i>
          <p>Frontend</p>
        </div>
        <div class="skill-card">
          <i class="fas fa-video"></i>
          <p>Motion</p>
        </div>
      </div>
      </div>


    </div>

  )
}

export default Services
