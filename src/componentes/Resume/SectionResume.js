import React, { Component, Fragment } from "react";
import styles from "./scss/SectionResume.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class SectionResume extends Component {
  render() {
    return (
      <Fragment>
        <h3
          className={`${styles.titleEducation} d-flex justify-content-center rounded-pill`}
        >
          <span className={`${styles.titleEmployment} rounded-pill`}>
            <span>
              <FontAwesomeIcon
                icon={["fas", `${this.props.fontawesomeicon}`]}
              />
            </span>
            <span>{this.props.title}</span>
          </span>
        </h3>
      </Fragment>
    );
  }
}
