import React, { Component } from "react";
import HeaderNav from "./HeaderNav";
import Introduction from "./Introduction";
import MainCarousel from "../carousel/MainCarousel";

export default class Header extends Component {
  render() {
    return (
      <div>
        <HeaderNav />
        <Introduction />
        <MainCarousel />
      </div>
    );
  }
}
