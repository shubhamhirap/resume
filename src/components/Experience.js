import React from "react";
import "../App.css";

const Experience = () => {
  return (
    <div>
      <section className="resume-section" id="experience" name="experience">
        <div className="resume-section-content">
          <h2 className="mb-5">Experience</h2>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Junior Software Engineer</h3>
              <div className="subheading mb-3">
                MODEZ TECH INGENIOUS PRIVATE LIMITED
              </div>
              <ul>
                <li>
                  Worked as a part of creative team as well as autonomously
                </li>
                <li>
                  Design component based user interfaces using React.js,
                  JavaScript.
                </li>
                <li>
                  Developing and maintaining user friendly and interactive
                  interfaces using React.Js, Redux, JavaScript, CSS.
                </li>
                <li>Code debugging and fixing the bug.</li>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <span className="timeline">Jul 2019 - Jan 2020</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Software Developer</h3>
              <div className="subheading mb-3">
                White Code technology solutions pvt. ltd.
              </div>
              <ul>
                <li>Worked as a part of team as well as autonomously</li>
                <li>
                  Design component based user interfaces using React.js, CSS,
                  HTML.
                </li>
                <li>
                  Successfully generated dynamic sites utilizing LAMP stack;
                  Linux, Apache, PHP, CSS, Javascript/JQuery and MySql.
                </li>
                <li>
                  Created dynamic websites with Codeigniter PHP framework. Which
                  mainly worked on MVC design pattern. Designed API Built in
                  PHP, creating new users and worked on admin side related
                  stuff.
                </li>
                <li>
                  Fixed bugs from existing websites and implemented enhancements
                  that significantly improved web functionality.
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <span className="timeline">Jul 2019 - Jan 2020</span>
            </div>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
};

export default Experience;
