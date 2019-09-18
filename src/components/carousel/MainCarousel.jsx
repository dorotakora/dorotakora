import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./mainCarousel.css";
import Carousel from "react-bootstrap/Carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import "font-awesome/css/font-awesome.min.css";
import FontAwesome from "react-fontawesome";

import cyclist from "../../assets/images/cyclist.png";
import kettlebell from "../../assets/images/kettlebell.png";
import speedway from "../../assets/images/speedway.png";
import technologies from "../../assets/images/technologies.png";

import CvPdf from "../../assets/cv/DorotaKoraCVeng.pdf";

const styles = {
  height: 850,
  width: "100%",
  backgroundColor: "#f9f7f7",
  marginTop: "-30px"
};

function MainCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  const controls = window.innerWidth < 768 ? false : true;

  const icons = (
    <div className="carousel-center-icons">
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
  );

  return (
    <Carousel
      activeIndex={index}
      direction={direction}
      onSelect={handleSelect}
      interval={null}
      controls={controls}
      touch={true}
    >
      <Carousel.Item>
        <div style={styles}>
          <div className="carousel-center" style={{ width: "80%" }}>
            <div>
              <div className="green-line">
                <h3>ABOUT ME</h3>
                <div></div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <div>
              {window.innerWidth >= 768 ? icons : null}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              {window.innerWidth < 768 ? icons : null}
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={styles}>
          <div className="carousel-center row" style={{ width: "100%" }}>
            <div
              className="green-line col-xs-12 col-md-6 offset-md-3 ml-md-auto"
              // style={{ paddingLeft: "7.5px" }}
            >
              <h3>EDUCATION</h3>
              <div></div>
            </div>
            {window.innerWidth > 768 ? (
              <div className="link col-xs-12 col-md-3 mr-md-auto">
                <div>
                  <Link to={CvPdf} target="_blank" className="link-resume">
                    Download my full resume
                  </Link>
                </div>
              </div>
            ) : null}

            <div className="col-xs-12 col-md-3 ml-md-auto">
              <p>
                <strong>
                  Warsaw University of Life Sciences - SGGW
                  <br />
                  Postgraduate Database Studies
                </strong>
                <br />
                <span style={{ color: "rgb(46, 204, 113)" }}>
                  10.2019 – curent
                </span>
                <br />
                Knowledge about the construction, design, programming and
                administration of relational databases like Oracle and mySQL.
              </p>
            </div>
            <div className="col-xs-12 col-md-3 ">
              <p>
                <strong>
                  Coders Lab - IT School
                  <br />
                  Certificate of Completion full-time IT bootcamp
                </strong>
                <br />
                <span style={{ color: "rgb(46, 204, 113)" }}>
                  02.2019 – 03.2019
                </span>
                <br />
                Thematic scope: HTML, CSS, JavaScript, SASS, RWD, jQuery,
                ECMAScript 6, Git,React. The course contains 470 hours of
                classes.
              </p>
            </div>

            <div className="col-xs-12 col-md-3 mr-md-auto">
              <p>
                <strong>
                  Univesity of Zielona Góra
                  <br /> Masters degree Business Management and Marketing
                </strong>
                <br />
                <span style={{ color: "rgb(46, 204, 113)" }}>
                  10.2004 – 07.2009
                </span>
                <br />
                Knowledge of issues which are necessary for active influencing
                markets and the successful conducting marketing and business
                campaigns. The techniques and tools needed to develop an
                organization.
              </p>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={styles}>
          <div className="carousel-center" style={{ width: "80%" }}>
            <div>
              <div className="green-line">
                <h3>EXPERIENCE</h3>
                <div></div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <div>
              {window.innerWidth >= 768 ? icons : null}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              {window.innerWidth < 768 ? icons : null}
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={styles}>
          <div className="carousel-center hobbies" style={{ width: "80%" }}>
            <div>
              <div className="green-line">
                <h3>HOBBIES & INTERESTS</h3>
                <div></div>
              </div>
            </div>
            <div className="hobbies-list">
              <div className="hobbies-list-item">
                <img src={cyclist} alt="cyclist"></img>
                <div>Outdoor cycling</div>
              </div>
              <div className="hobbies-list-item">
                <img src={kettlebell} alt="kettlebell"></img>
                <div>Kettlebells</div>
              </div>
              <div className="hobbies-list-item">
                <img src={speedway} alt="speedway"></img>
                <div>Speedway fan</div>
              </div>

              <div className="hobbies-list-item">
                <img src={technologies} alt="technologies"></img>
                <div>New technologies</div>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;
