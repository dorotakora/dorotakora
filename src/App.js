import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/Header";

import "./App.css";
import MainCarousel from "./components/carousel/MainCarousel";
import Skills from "./components/skills/Skills";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <div className="app bcg">
      <Router>
        <Route exact path="/" component={Header} />
        <Route exact path="/resume" component={MainCarousel}></Route>
        <Route exact path="/skills" component={Skills}></Route>
      </Router>
    </div>
  );
};

export default App;
