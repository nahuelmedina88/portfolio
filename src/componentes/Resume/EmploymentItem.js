import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./scss/EmploymentItem.module.scss";

export default class EmploymentItem extends Component {
  render() {
    return (
      <Fragment>
        <div className={`${styles.mainWorkDetails}`}>
          <span className={styles.icon}>
            <FontAwesomeIcon icon={["fas", "circle"]} />
          </span>
          <span className={styles.dateWork}>
            <em>{this.props.date}</em>
          </span>
          <p className={styles.nameWork}>
            <strong>{this.props.name}</strong>
          </p>
          <p className={styles.positionWork}>
            <strong>{this.props.position}</strong>
          </p>
          <p className={styles.descriptionWorkTwo}>{this.props.description}</p>
          <p className={styles.referenceWork}>
            <a href={this.props.reference}>{this.props.reference}</a>
          </p>
        </div>
      </Fragment>
    );
  }
}
