import React from "react";
import "../App.css";

const Experience = () => {
  return (
    <div>
      {/* <!-- Experience--> */}
      <section className="resume-section" id="experience" name="experience">
        <div className="resume-section-content">
          <h2 className="mb-5">Experience</h2>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Software Developer</h3>
              <div className="subheading mb-3">
                White Code technology solutions pvt. ltd.
              </div>
              <ul>
                <li>
                  Successfully generated dynamic sites utilizing LAMP stack;
                  Linux, Apache, PHP, CSS, Javascript/JQuery and MySql.
                </li>
                <li>
                  Created websites with Codeigniter PHP framework. Which mainly
                  worked on MVC design pattern. Designed API Built in PHP,
                  creating new users and worked on admin side related stuff.
                </li>
                <li>
                  Fixed bugs from existing websites and implemented enhancements
                  that significantly improved web functionality.
                </li>
              </ul>
              {/* <p>PHP Developer</p> */}
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
