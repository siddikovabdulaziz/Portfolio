import React from 'react';
import './Services.css';

// Icons
import { BsVectorPen } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
import { FaDelicious, FaCode, FaDesktop } from "react-icons/fa";
import { MdAutoAwesomeMotion } from "react-icons/md";

const Services = () => {
  return (
    <div className="services-container">
      <div className="buttom-container">
        <div className="skills-container">
          <div className="skill-card">
            <BsVectorPen className="icon" />
            <p>Product Design</p>
          </div>
          <div className="skill-card">
            <p className='icon'>UX/UI</p>
            <p>UX/UI Design</p>
          </div>
          <div className="skill-card">
          <TiThMenu className="icon" />
            <p>Icon Design</p>
          </div>
          <div className="skill-card">
          <FaDelicious className="icon" />
            <p>Logo Design</p>
          </div>
          <div className="skill-card">
            <FaCode className="icon" />
            <p>Backend</p>
          </div>
          <div className="skill-card">
            <FaDesktop className="icon" />
            <p>Frontend</p>
          </div>
          <div className="skill-card">
            <MdAutoAwesomeMotion className="icon" />
            <p>Motion</p>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default Services;
