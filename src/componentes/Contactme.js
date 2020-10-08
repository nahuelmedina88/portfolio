import React, { Component, Fragment } from "react";
import FadeInSection from "./FadeInSection";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./css/Contactme.module.scss";

export default class Contactme extends Component {
  render() {
    return (
      <Fragment>
        <FadeInSection>
          <Row Style="background-color:#80808026 !important;">
            <Col className={styles.someProperties}>
              <h2 className="d-flex justify-content-center">CONTACT ME</h2>
              <p
                className="d-flex justify-content-center"
                Style="text-align:justify;"
              >
                I can help you solve a problem, create something new, or improve
                and grow an existing project.
              </p>
              <span className="d-flex justify-content-center">
                <a class="btn btn-primary" href="/Contact" role="button">
                  Send me a Message
                </a>
              </span>
            </Col>
          </Row>
        </FadeInSection>
      </Fragment>
    );
  }
}
