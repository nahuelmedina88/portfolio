import React, { Component, Fragment } from "react";
import FadeInSection from "./FadeInSection";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./css/Projects.module.scss";

export default class Projects extends Component {
  render() {
    return (
      <Fragment>
        <FadeInSection>
          <Row md={2} className={styles.maindiv}>
            <Col
              md={6}
              className={`d-flex align-items-center ${styles.imagediv}`}
            >
              <a
                href="https://losotrodo.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src={require("./images/losotrodo.jpg")}
                  alt="blog de viaje"
                  className="img-fluid img-thumbnail"
                ></img>
              </a>
            </Col>
            <Col md={6} className={`${styles.textdiv}`}>
              <h2 className={styles.titlelandingpage}>MY FREELANCE WORK</h2>
              <p>As a freelance I developed three projects:</p>
              <p>
                A control and management program for the Merlo Meat Union
                (Argentina) and a blog for the same organization. And also a
                travel blog.
              </p>
            </Col>
            {/* <Col className="d-flex justify-content-center"> */}
          </Row>
        </FadeInSection>
      </Fragment>
    );
  }
}
