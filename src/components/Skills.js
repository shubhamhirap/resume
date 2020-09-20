import React from "react";
import "../App.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaReact,
  FaPhp,
  FaPython,
  FaGithub,
  FaNpm,
  FaDatabase,
} from "react-icons/fa";

const Skills = () => {
  return (
    <div>
      {/* <!-- Skills--> */}
      <section class="resume-section" id="skills" name="skills">
        <div class="resume-section-content">
          <h2 class="mb-5">Skills</h2>
          <div class="subheading mb-3">Programming Languages & Tools</div>
          <ul class="list-inline dev-icons">
            <li class="list-inline-item">
              <FaHtml5 />
            </li>
            <li class="list-inline-item">
              <FaCss3Alt />
            </li>
            <li class="list-inline-item">
              <FaBootstrap />
            </li>
            <li class="list-inline-item">
              <FaJsSquare />
            </li>
            <li class="list-inline-item">
              <FaReact />
            </li>
            <li class="list-inline-item">
              <FaPhp />
            </li>
            <li class="list-inline-item">
              <FaPython />
            </li>
            <li class="list-inline-item">
              <FaDatabase />
            </li>
            <li class="list-inline-item">
              <FaGithub />
            </li>
            <li class="list-inline-item">
              <FaNpm />
            </li>
          </ul>
        </div>
      </section>
      <hr class="m-0" />
    </div>
  );
};

export default Skills;
