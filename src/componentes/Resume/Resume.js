import React, { Component, Fragment } from "react";
import HeaderResume from "./HeaderResume";
import BodyResume from "./BodyResume";
import MenuNavigation from "./MenuNavigation";

export default class Resume extends Component {
  render() {
    return (
      <Fragment>
        <MenuNavigation route={this.props.match.path} />
        <HeaderResume />
        <BodyResume />
      </Fragment>
    );
  }
}
