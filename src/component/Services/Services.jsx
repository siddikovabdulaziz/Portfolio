import React from 'react';
import './Services.css';
import { BsVectorPen } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { SiDelicious } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { FaDisplay } from "react-icons/fa6";
import { MdAutoAwesomeMotion } from "react-icons/md";

// Icons


const Services = () => {
  return (
    <div className="product" id="Services">
      <div className="product-cards">
        <div className="product-card">
        <div className="icon1"><BsVectorPen /></div> 
          <h4>Product Design</h4>
        </div>
        <div className="product-card">
          <div className='icon'>UX/UI</div>
          <h4>UX/UI Design</h4>
        </div>
        <div className="product-card">
          <div className='icon'><FaList /></div>
          <h4>Icon Design</h4>
        </div>
        <div className="product-card">
        <div className='icon'><SiDelicious /> </div>
          <h4>Logo Design</h4>
        </div>
        <div className="product-card">
        <div className='icon'><FaCode /></div>
          <h4>Backend</h4>  
        </div>
        <div className="product-card">
        <div className='icon'><FaDisplay /></div>
          <h4>Frontend</h4>
        </div>
        <div className="product-card">
        <div className='icon'><MdAutoAwesomeMotion /></div>
          <h4>Motion</h4>
        </div>
      </div>
    </div>
  );
}

export default Services;
