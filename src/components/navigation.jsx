import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            style={{
              marginTop: '38px'
            }}
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a href="#header" className="page-scroll nav-primary">
            <img className="logo" alt="logo" src="https://i.imgur.com/6cvD09t.png" />
          </a>
        </div>
      </div>
      <div
        className="collapse navbar-collapse"
        id="bs-example-navbar-collapse-1"
        style={{
          marginTop: '30px'
        }}
      >
        <ul className="nav navbar-nav navbar-right" style={{
          marginRight: '10%'
        }}>
          <li>
            <a href="#services" className="page-scroll nav-primary">
              Services
            </a>
          </li>

          <li>
            <a href="#portfolio" className="page-scroll nav-primary">
              Careers
            </a>
          </li>
          <li>
            <a href="#testimonials" className="page-scroll nav-primary">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#about" className="page-scroll nav-primary">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="page-scroll nav-primary">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
