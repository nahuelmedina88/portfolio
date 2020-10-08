import React, { Component, Fragment } from "react";
import styles from "./scss/EducationItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class EducationItem extends Component {
  render() {
    return (
      <Fragment>
        <div className={`${styles.mainEducationDetails}`}>
          <span className={styles.icon}>
            <FontAwesomeIcon icon={["fas", "circle"]} />
          </span>
          <span className={styles.date}>
            <em>{this.props.date}</em>
          </span>
          <p className={styles.nameschool}>
            <strong>{this.props.name}</strong>
          </p>
          <p className={styles.titleSchool}>
            <strong>{this.props.titleschool}</strong>
          </p>
        </div>
      </Fragment>
    );
  }
}
