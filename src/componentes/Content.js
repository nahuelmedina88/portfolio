import React, { Component, Fragment } from "react";
import styles from "./css/Content.module.scss";

export default class Content extends Component {
  render() {
    return (
      <Fragment>
        <div className={styles.container}>
          <h4 className={styles.texttitle}>{this.props.title}</h4>
          <h6 className={styles.texttitle}>{this.props.subtitle}</h6>
          <p>{this.props.content}</p>
        </div>
      </Fragment>
    );
  }
}
