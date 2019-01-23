import React, { Component } from "react";
import "./styles.css";
import Banner from "../../components/Banner/Banner";
import Skills from "../../components/Skills";

import projects from "./projects";

export default class ProjectsPage extends Component {
  render() {
    return (
      <div id="projectsPage">
        <Banner  banner="Projects" />
        <div >
          <Skills title="Web Work in the Wild" content={projects.clientWork} />
          <Skills title="Responsive Web Design" content={projects.responsive} />
          <Skills title="Vanilla JavaScript" content={projects.vanillaJs} />
          <Skills title="Front End Libraries" content={projects.frontEnd} />
          <Skills title="Data Visualization" content={projects.dataVis} />
          <Skills title="APIs and Microservices" content={projects.apis} />
          <Skills
            title="Information Security and Quality Assurance"
            content={projects.infoSecQA}
          />
          <Skills title="Misc" content={projects.misc} />
        </div>
      </div>
    );
  }
}
