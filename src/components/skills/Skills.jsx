import React from "react";

import "./Skills.css";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import js from "../../assets/images/js.png";
import jquery from "../../assets/images/jquery.png";
import react from "../../assets/images/react.png";
import angular from "../../assets/images/angular.png";
import mongo from "../../assets/images/mongo.png";
import firebase from "../../assets/images/firebase.png";
import sql from "../../assets/images/sql.png";
import c from "../../assets/images/c.png";
import node from "../../assets/images/node.png";

class Skills extends React.Component {
  fadeIcons = () => {
    let iconList = [...document.querySelectorAll(".hide")];

    iconList.forEach(icon => {
      icon.getBoundingClientRect().top - window.innerHeight <= 0
        ? icon.classList.add("show-icons")
        : icon.classList.remove("show-icons");
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.fadeIcons);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.fadeIcons);
  }
  render() {
    return (
      <div className="slides">
        <div className="slides-desc">I started with learning...</div>
        <div className="slides-learned hide">
          <div className="icon">
            <img src={html} alt="html" />
          </div>
          <div className="icon">
            <img src={css} alt="css" />
          </div>
          <div className="icon">
            <img src={js} alt="js" />
          </div>
          <div className="icon">
            <img src={jquery} alt="jquery" />
          </div>
        </div>
        <div className="slides-desc">now specialize in</div>
        <div className="slides-specialized hide">
          <div className="icon">
            <img src={react} alt="react" />
          </div>
        </div>
        <div className="slides-desc">started to learn</div>
        <div className="slides-started hide">
          <div className="icon">
            <img src={sql} alt="sql" />
          </div>

          <div className="icon">
            <img src={firebase} alt="firebase" />
          </div>
          <div className="icon">
            <img src={mongo} alt="mongo" />
          </div>
          <div className="icon">
            <img src={node} alt="node" />
          </div>
        </div>
        <div className="slides-desc">planning to learn</div>
        <div className="slides-planning hide">
          <div className="icon">
            <img src={angular} alt="angular" />
          </div>

          <div className="icon">
            <img src={c} alt="c" />
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
