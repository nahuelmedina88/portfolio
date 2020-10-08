import React, { Component, Fragment } from "react";
import styles from "./scss/Skill.module.scss";

export default class Skill extends Component {
  render() {
    return (
      <Fragment>
        <p className={`${styles.title} d-flex justify-content-center`}>
          {this.props.name}
        </p>
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped bg-success"
            role="progressbar"
            Style={`width: ${this.props.value}%`}
            aria-valuenow={this.props.value}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </Fragment>
    );
  }
}
