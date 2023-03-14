import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }} className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <img className="logo" src="https://i.imgur.com/6cvD09t.png" />
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll nav-primary">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll nav-primary">
                Insights
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll nav-primary">
                About
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
              <a href="#team" className="page-scroll nav-primary">
                Investments
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll nav-primary">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
