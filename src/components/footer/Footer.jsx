import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import FontAwesome from "react-fontawesome";
import CvPdf from "../../assets/cv/DorotaKoraCVeng.pdf";

class Footer extends Component {
  render() {
    return (
      <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
        <div class="container text-center">
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
          <div>Follow me on social networks</div>
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
          <small>Copyright &copy; 2019 by Dorota Kora</small>
        </div>
      </footer>
    );
  }
}

export default Footer;
