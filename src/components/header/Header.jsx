import React, { Component } from "react";
import HeaderNav from "./HeaderNav";
import Introduction from "./Introduction";
import MainCarousel from "../carousel/MainCarousel";
import Skills from "../skills/Skills";

export default class Header extends Component {
  render() {
    return (
      <div className="main-container">
        <HeaderNav />
        <Introduction />
        <MainCarousel />
        <Skills />
      </div>
    );
  }
}
