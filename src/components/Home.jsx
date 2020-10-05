import React from "react";
import developer from "../assets/programming.svg";
import { About } from "./About";
import { Projects } from "./Projects";
export const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="home-content">
                <div className="header-container">
                  <h1>
                    Front-End Developer <strong>Muhammad Qasim Qadri </strong>
                  </h1>
                  <h4>Passionate Front-End Developer</h4>
                  <button className="detail-btn">Details</button>
                </div>
                <img
                  src={developer}
                  alt="developer"
                  className="img-animation"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Projects />
    </>
  );
};
