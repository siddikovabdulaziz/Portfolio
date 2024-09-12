import React from "react";
import "./Main.css";
import mainImg from "./main-img.png"

const Main = () => {
  return (
    <div className="main-container">
      <div className="info-container">
        <h2>Hello</h2>
        <h1>
          I’m Gleb <br />
          Kostrubov
        </h1>
        <p>
          I've been doing web design, front-end and <br/> back-end development for a
          year now. Do you <br/> need a website design, site layout, or maybe a <br/>
          turnkey website? Then contact me
        </p>
        <button>Contact me</button>
      </div>
      <div className="main-icon">
        <div className="Ps">Ps</div>
        <div className="Ux">Ux</div>
        <div className="belgi">{"</"}</div>
        <div className="UI">UI</div>
      </div>
      <div className="img-container">
      <img src={mainImg} alt="Profile" className="main-img" />
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default Main;
