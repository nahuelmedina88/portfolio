import React, { Component, Fragment } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./css/CoverImage.module.scss";

export default class CoverImage extends Component {
  render() {
    const rowStyle = {
      backgroundImage: `url(${this.props.image})`,
    };
    return (
      <Fragment>
        <Row
          className={`${styles.backgroundimg} d-flex align-items-end bd-highlight mb-3 example-parent`}
          style={rowStyle}
        >
          <Col>
            <h1 className={styles.mainmessage}>{this.props.title}</h1>
            <h3 className={styles.mainmessage}>{this.props.subtitle}</h3>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
