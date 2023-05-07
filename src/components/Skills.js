import React from "react";
import "../App.css";
import {
  SiBootstrap,
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNodeDotJs,
  SiNpm,
  SiReact,
  SiTypescript,
  SiVisualstudiocode,
  SiYarn,
} from "react-icons/si";

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
              <SiReact />
            </li>
            <li className="list-inline-item">
              <SiJavascript />
            </li>
            <li className="list-inline-item">
              <SiNodeDotJs />
            </li>
            <li class="list-inline-item">
              <SiTypescript />
            </li>
            <li class="list-inline-item">
              <SiGit />
            </li>
            <li class="list-inline-item">
              <SiNpm />
            </li>
            <li class="list-inline-item">
              <SiYarn />
            </li>
            <li class="list-inline-item">
              <SiHtml5 />
            </li>
            <li class="list-inline-item">
              <SiCss3 />
            </li>
            <li class="list-inline-item">
              <SiBootstrap />
            </li>
            <li class="list-inline-item">
              <SiVisualstudiocode />
            </li>
          </ul>
        </div>
      </section>
      <hr class="m-0" />
    </div>
  );
};

export default Skills;
