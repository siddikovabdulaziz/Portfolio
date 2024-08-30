import React from "react";
import "./Main.css";

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
      <div className="img-container"></div>
    </div>
  );
};

export default Main;
