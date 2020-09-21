import React from "react";
import "../App.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const About = () => {
  return (
    <div>
      {/* <!-- About--> */}
      <section className="resume-section" id="about" name="about">
        <div className="resume-section-content">
          <h1 className="mb-0">
            Shubham
            <span className="text-primary"> Hirap</span>
          </h1>
          <div className="subheading mb-5">
            Ratan nagar, Near Jain mandir, Malegaon road · Nanded, MH 431605 · 8999029686 ·
            <a href="mailto:shirap07@gmail.com">shirap07@gmail.com</a>
          </div>
          <p className="lead mb-5">
            Self motivated and Self-learner, Ability to maintain and develop
            user interfaces. I am Looking for entry level position as a Software
            Developer where I can hone my technical skills. Proficiency
            in React.js, JavaScript, JQuery, PHP, MySQL, CSS3, HTML5.
          </p>
          <div className="social-icons">
            <a
              className="social-icon"
              href="https://www.linkedin.com/in/shubham-hirap/"
            >
              <FaLinkedin />
            </a>
            <a className="social-icon" href="https://github.com/shubhamhirap">
              <FaGithub />
            </a>
            <a className="social-icon" href="https://twitter.com/shubhamhirap">
              <FaTwitter />
            </a>
            <a className="social-icon" href="mailto:shirap07@gmail.com">
              <SiGmail />
            </a>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
};

export default About;
