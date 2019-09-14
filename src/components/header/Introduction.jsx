import React from "react";

import "./Header.css";

import foto1 from "../../assets/images/foto1.png";
import inscription from "../../assets/images/inscription_ang.png";

const Introduction = () => {
  return (
    <div className="intro">
      <div className="intro-insc">
        <img src={inscription} alt="inscription"></img>
      </div>
      <div className="intro-text">Junior Front-End Developer</div>
      <div className="intro-img">
        <img src={foto1} alt="foto"></img>
      </div>
    </div>
  );
};

export default Introduction;
