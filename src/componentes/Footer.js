import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FadeInSection from "./FadeInSection";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import styles from "./css/Footer.module.scss";

// import Col from "react-bootstrap/Col";

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <FadeInSection>
          <div className={styles.footer}>
            <Row className={`d-flex justify-content-center ${styles.iconos}`}>
              <FontAwesomeIcon
                icon={["fab", "linkedin"]}
                id="linkedin"
                className={styles.footericon}
              />
              <FontAwesomeIcon
                icon={["fab", "facebook"]}
                id="facebook"
                className={styles.footericon}
              />
            </Row>
            <Row
              className={`d-flex justify-content-center  ${styles.menufooter}`}
            >
              <Nav className="d-flex justify-content-center" activeKey="/home">
                <Nav.Item>
                  <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/aboutme">About Me</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/myprojects">My Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/resume">Resume</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav.Item>
              </Nav>
            </Row>
          </div>
        </FadeInSection>
      </Fragment>
    );
  }
}
