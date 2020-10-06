import React from "react";
import projectData from "./data";

export const Projects = () => {
  return (
    <div className="project-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="project-content"></div>
            <h1 className="project-heading">Projects:</h1>
            <div className="cards-container">
              {projectData.map((value, index) => {
                return (
                  <div className="card">
                    <img
                      src={value.imagesrc}
                      className="card-img-top"
                      alt="projects"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{value.name}</h5>
                      <p className="card-text">{value.detail}</p>
                      <a href={value.repolink} className="btn btn-primary">
                        Repository
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
