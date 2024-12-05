import React from "react";
import "./Main.css";
import mainImg from "./main-img.png"

const Main = () => {
  return (
    <div className="main-container">
      <div className="info-container" >
        <h2 data-aos="fade-up"> Hello</h2>
        <h1 data-aos="fade-up">
          I’m Gleb <br />
          Kostrubov
        </h1>
        <p  data-aos="fade-up">
          I've been doing web design, front-end and <br/> back-end development for a
          year now. Do you <br/> need a website design, site layout, or maybe a <br/>
          turnkey website? Then contact me
        </p>  
        <button data-aos="fade-up">Contact me</button>
      </div>
      <div className="main-icon" data-aos="zoom-in">
        <div className="Ps">Ps</div>
        <div className="Ux">Ux</div>
        <div className="belgi">{"</"}</div>
        <div className="UI">UI</div>
      </div>
      <div className="img-container" >
          <img src={mainImg} alt="Profile" className="main-img"   />
        
        <div className="circle" data-aos="fade-down"></div>
      </div>
    </div>
  );
};

export default Main;
