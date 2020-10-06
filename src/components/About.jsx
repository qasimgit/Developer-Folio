import React from "react";
import animatedsvg from "../assets/dev-intro.svg";

export const About = () => {
  return (
    <div className="about-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="about-content">
              <h1 className="about-heading">About:</h1>
              <div className="about-intro-img">
                <div>
                  <h1>Hi, I'm Muhammad Qasim Qadri</h1>
                  <p>
                    This is Muhammad Qasim Qadri,a passionate Front-end
                    developer from Pakistan, currently enrolled in BSCS Computer
                    Science in SMIU University Karachi. Web Developer
                    specializing in front end developments. Experienced with all
                    stages of the development cycle for dynamic web projects.
                    Well-versed in numerous programming languages/approaches
                    including HTML5, CSS, JavaScript, Reactjs, Firebase etc.
                    Strong Communications Skills in project management and team
                    work.
                  </p>
                  <p align="left">
                    <img
                      src="https://komarev.com/ghpvc/?username=qasimgit"
                      alt="qasimgit"
                    />
                  </p>
                  <p>
                    <span role="img"  aria-label="donut">- 🔭</span> I’m currently enrolled in 4
                    year undergraduate BS Compute Science.
                  </p>
                  <p>
                    {" "}
                    <span role="img"  aria-label="donut"> - 🌱 </span>I’m currently making full
                    grasp on React Js
                  </p>
                  <p>
                  <span role="img"  aria-label="donut"> - 👨‍💻</span> All of my projects are available at{"  "}
                    <a href="https://github.com/qasimgit">
                      https://github.com/qasimgit
                    </a>
                  </p>
                  <p>
                    <span role="img" aria-label="donut"> - 📝 </span>I often write articles on
                    {"  "}
                    <a href="https://medium.com/@qasimpkkhi">
                      https://medium.com/@qasimpkkhi
                    </a>
                  </p>
                  <p>
                    <span role="img" aria-label="donut">- 📫 </span>How to reach me
                    qasimpkkhi@gmail.com
                  </p>
                  <p><span role="img"  aria-label="donut">- ⚡</span> Fun fact Chai Over Coffee</p>
                  <p align="left">
                    <img
                      className="skill-img"
                      src="https://devicons.github.io/devicon/devicon.git/icons/html5/html5-original-wordmark.svg"
                      alt="html5"
                      width="60"
                      height="60"
                    />
                    <img
                      className="skill-img"
                      src="https://devicons.github.io/devicon/devicon.git/icons/css3/css3-original-wordmark.svg"
                      alt="css3"
                      width="60"
                      height="60"
                    />
                    <img
                      className="skill-img"
                      src="https://devicons.github.io/devicon/devicon.git/icons/bootstrap/bootstrap-plain.svg"
                      alt="bootstrap"
                      width="60"
                      height="60"
                    />
                    <img
                      className="skill-img"
                      src="https://devicons.github.io/devicon/devicon.git/icons/javascript/javascript-original.svg"
                      alt="javascript"
                      width="60"
                      height="60"
                    />
                    <img
                      className="skill-img"
                      src="https://www.chartjs.org/media/logo-title.svg"
                      alt="chartjs"
                      width="60"
                      height="60"
                    />{" "}
                    <img
                      className="skill-img"
                      src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                      alt="git"
                      width="60"
                      height="60"
                    />
                    <img
                      className="skill-img"
                      src="https://devicons.github.io/devicon/devicon.git/icons/react/react-original-wordmark.svg"
                      alt="react"
                      width="60"
                      height="60"
                    />
                    <img
                      className="skill-img"
                      src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                      alt="firebase"
                      width="60"
                      height="60"
                    />
                    <img
                      className="skill-img"
                      src="https://devicons.github.io/devicon/devicon.git/icons/typescript/typescript-original.svg"
                      alt="typescript"
                      width="60"
                      height="60"
                    />
                  </p>
                </div>
                <div className="svg-image">
                  <img
                    src={animatedsvg}
                    alt="developer"
                    className="img-animation"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
