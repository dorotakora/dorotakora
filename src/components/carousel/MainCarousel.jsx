import React, { useState } from "react";

import "./mainCarousel.css";

import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import "font-awesome/css/font-awesome.min.css";
import FontAwesome from "react-fontawesome";
import Carousel from "react-bootstrap/Carousel";

const styles = { height: "100vh", width: "100%", backgroundColor: "#f9f7f7" };

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
          <div className="carousel-center" style={{ width: "80%" }}>
            <div>
              <div className="green-line">
                <h3>EDUCATION</h3>
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <div className="carousel-center-icons">
                <FontAwesome
                  className="fab fa-linkedin"
                  name="linkedin"
                  size="2x"
                />
                <FontAwesome
                  className="fab fa-github-square"
                  name="github"
                  size="2x"
                />
              </div>
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

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
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={styles}>
          <div className="carousel-center" style={{ width: "80%" }}>
            <div>
              <div className="green-line">
                <h3>INTERESTS</h3>
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

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
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;
