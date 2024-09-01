import React from 'react'
import "./Footer.css"
import footerLogo from "./Group 1 (1).png"
import { FaArrowCircleUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="footer-container" id='Contact'>
        <div className="footer-content">
          <div className="footer-section">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About me</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <p>Contact:</p>
            <p>Email: notittanic33@gmail.com</p>
            <p>Inst: nottitanic33</p>
            <p>Calls: +7 (900) - 121 - 54 -54</p>
          </div>
          <div className="footer-section ">
            <div className='footer-logo'> 
              <img src={footerLogo} alt="Nottitanic Logo" />
              <FaArrowCircleUp className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
              </div>
            <div className="footer-bottom">
              <p>Copyright © 2021, Nottitanic</p>
            </div>
          </div>
        </div>

      </footer>
    </div>
  )
}

export default Footer
