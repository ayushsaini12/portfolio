import React, { Fragment } from "react";
import PropTypes from "prop-types";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import { Link } from "react-router-dom";

const Header = ({ resumeData }) => {
  return (
    <Fragment>
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#" title="Hide navigation">
            Hide navigation
          </a>
          <ul id="nav" className="nav">
            <li className="current">
              <AnchorLink href="#home">Home</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#about">About</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#resume">Resume</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#portfolio">Works</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#contact">Contact</AnchorLink>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1Eq6DT6nrbIGtFGF3oW6fXZlqj0Qhsp4l/view?usp=sharing"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I am {resumeData.name}.</h1>
            <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
              I am a {resumeData.role}.{resumeData.roleDescription}
            </h3>
            <hr />
            <ul className="social">
              {resumeData.socialLinks &&
                resumeData.socialLinks.map((item) => {
                  return (
                    <li key={item.name}>
                      <a href={item.url} target="_blank">
                        <i className={item.className}></i>
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <AnchorLink href="#about">
            <i className="icon-down-circle"></i>
          </AnchorLink>
        </p>
      </header>
    </Fragment>
  );
};

Header.propTypes = {
  resumeData: PropTypes.object.isRequired,
};

export default Header;
