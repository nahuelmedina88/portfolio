import React, { Component, Fragment } from "react";
import FadeInSection from "./FadeInSection";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./css/WorkExperience.module.scss";

export default class WorkExperience extends Component {
  render() {
    return (
      <Fragment>
        <FadeInSection>
          <Row
            md={2}
            className={styles.maindiv}
            Style="background-color:#03083ef5 !important;"
          >
            <Col md={6} className={`${styles.textdiv}`}>
              <h2 className={styles.title}>COMPANIES I WORKED WITH</h2>
              <p>
                In Argentina I worked in two insurance-oriented companies:
                SISTRAN and BOSTON. There I did maintenance and improvement of
                the website and development of desktop apps.
              </p>
              <p>
                In several projects that I developed I was in charge of the
                back-end and in many others my function was as full stack.
                Therefore I also have experience in front-end.
              </p>
              <p>
                There I worked in both ways: independently and also as a team,
                applying specific development methodologies.
              </p>
            </Col>
            <Col
              md={6}
              className={`d-flex align-items-center ${styles.imagediv}`}
            >
              <a
                href="http://www.boston.com.ar/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src={require("./images/boston3.jpg")}
                  alt="boston"
                  className="img-fluid img-thumbnail"
                ></img>
              </a>
              {/* <img
                src={nahuel}
                alt="muchacho bonito"
                className="img-fluid img-thumbnail"
              ></img> */}
            </Col>
          </Row>
        </FadeInSection>
      </Fragment>
    );
  }
}
