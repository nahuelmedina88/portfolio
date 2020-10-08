import React, { Component, Fragment } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./css/ProjectPost.module.scss";

export default class ProjectPost extends Component {
  render() {
    return (
      <Fragment>
        <Row
          md={2}
          className={`${styles.maindiv} ${
            this.props.type === "imageFirst"
              ? styles.imgBackColor
              : styles.textBackColor
          }`}
        >
          <Col
            md={{ span: 6, order: this.props.type === "imageFirst" ? 1 : 2 }}
            className={`d-flex align-items-center ${styles.imagediv}`}
          >
            <a href={this.props.site} rel="noopener noreferrer" target="_blank">
              <img
                src={this.props.image}
                alt={this.props.altPicture}
                className="img-fluid img-thumbnail"
              ></img>
            </a>
          </Col>
          <Col
            md={{ span: 6, order: this.props.type === "textFirst" ? 1 : 2 }}
            className={`${styles.textdiv}`}
          >
            <h2 className={styles.title}>{this.props.title}</h2>
            <p>{this.props.text}</p>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
