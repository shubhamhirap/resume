import React from "react";
import "../App.css";

const Projects = () => {
  return (
    <div>
      <section className="resume-section" id="projects" name="projects">
        <div className="resume-section-content">
          <h2 className="mb-5">Projects</h2>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">My Portfolio</h3>
              <ul className="mt-2">
                <li>Portfolio Website with React Js. </li>
                <li>
                  Component based project design using React.js, CSS, bootstrap.
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://shubhamhirap.netlify.app/"
                    target="_blank"
                  >
                    <strong>See Full Project</strong>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Color Helper</h3>
              <ul className="mt-2">
                <li>
                  This project helps web designer and web developer to find
                  attractive colors for web pages/web sites.
                </li>
                <li>Here are two different visuals for the color palette.</li>
                <li>
                  Random color and hex code for that color. Easy to use. Project
                  build using - React.js, bootstrap
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://color-helper.netlify.app/"
                    target="_blank"
                  >
                    <strong>See Full Project</strong>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Appointment interface</h3>
              <ul className="mt-2">
                <li>An Appointment interface project with react.js .</li>
                <li>
                  In this projects, Axios is used to get data dynamically.
                </li>
                <li>
                  Full functional project -- Can add new appointment, search and
                  sort appointment, delete appointment.
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://pet-clinic-appointment.netlify.app/"
                    target="_blank"
                  >
                    <strong>See Full Project</strong>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Tic-Tac-Toe Game</h3>
              <ul className="mt-2">
                <li>Tic-Tac-Toe game project using react.</li>
                <li>
                  three screen first one for welcome and choose for play mode.
                  second screen to pick a side. last screen too play game.
                </li>
                <li>React-router is used for routing in this project.</li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="http://react-game-tic-tac-toe.herokuapp.com/"
                    target="_blank"
                  >
                    <strong>See Full Project</strong>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
};

export default Projects;
