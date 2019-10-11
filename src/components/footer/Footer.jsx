import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import FontAwesome from "react-fontawesome";
import CvPdf from "../../assets/cv/DorotaKoraCVeng.pdf";

class Footer extends Component {
  render() {
    return (
      <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
        <div className="container text-center footer-container">
          <div className="link footer-link">
            <div>
              <Link
                to={CvPdf}
                target="_blank"
                className="link-resume"
                id="footer-link"
              >
                Download my full resume
              </Link>
            </div>
          </div>
          <br></br>
          <div className="footer-social">Follow me on social networks</div>
          <div className="carousel-center-icons footer-icons">
            <FontAwesome
              className="fab fa-linkedin"
              name="linkedin"
              size="2x"
              style={{ color: "rgb(46, 204, 113)" }}
            />
            <FontAwesome
              className="fab fa-github-square"
              name="github"
              size="2x"
              style={{ color: "rgb(46, 204, 113)" }}
            />
          </div>
          <div className="footer-copyright" style={{ fontSize: "0.8em" }}>
            Copyright &copy; 2019 by Dorota Kora
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
