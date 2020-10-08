import React, { Component, Fragment } from "react";
import "./css/styles.scss";
import Technologies from "./Technologies";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Contactme from "./Contactme";
import HomeHeader from "./HomeHeader";
import "./css/bootstrapFix.scss";
import MenuNavigation from "./MenuNavigation.js";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <MenuNavigation route={this.props.match.path} />
        <HomeHeader />
        <div className="maincontainer">
          <Technologies />
          <WorkExperience />
          <Projects />
          <Contactme />
        </div>
      </Fragment>
    );
  }
}
