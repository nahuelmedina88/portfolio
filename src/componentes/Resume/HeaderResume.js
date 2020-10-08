import React, { Component, Fragment } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import picture from "./images/nahuelPortrait_small.jpg";
import styles from "./scss/HeaderResume.module.scss";

export default class HeaderResume extends Component {
  render() {
    return (
      <Fragment>
        <Row className={styles.headerContainer}>
          <Col
            md={{ span: 6, offset: 3 }}
            className={`${styles.nameWorker} rounded-pill`}
          >
            <Row
              className="d-flex justify-content-center"
              // Style="background-color:grey;"
            >
              <Col
                md={4}
                //  Style="background-color:green;"
                className="d-flex justify-content-start"
              >
                <img
                  src={picture}
                  className="border border-primary rounded-circle img-fluid"
                  alt="joven programador web"
                ></img>
              </Col>
              <Col
                md={8}
                //  Style="background-color:blue;"
                className="d-flex flex-wrap align-items-center"
              >
                <Row>
                  <Col md={12}>
                    <h2 className="p-2 bd-highlight">NAHUEL MEDINA SENN</h2>
                  </Col>
                  <Col md={12}>
                    <h5 className="p-2 bd-highlight">Web Developer</h5>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className={styles.lineSeparatored} md={12}></Col>
        </Row>
      </Fragment>
    );
  }
}
