import React, { Component, Fragment } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FadeInSection from "./FadeInSection";
import styles from "./css/Technologies.module.scss";

export default class Technologies extends Component {
  render() {
    return (
      <Fragment>
        <FadeInSection>
          {/* First Row */}
          <div className={styles.maincontainer}>
            <Row>
              <Col className="d-flex justify-content-center">
                {/* <h2>In which technologies I've had experience. </h2> */}
                <h2 className={styles.title}>MY DEV TOOLS</h2>
              </Col>
            </Row>
            <Row md={5} xs={3} className="d-flex justify-content-center">
              <div
                className={`p-2 col-example text-center ${styles.iconeffect}`}
              >
                <p>
                  <FontAwesomeIcon
                    icon={["fab", "react"]}
                    id="react"
                    className={styles.icon}
                  />
                </p>
                <p>React</p>
              </div>
              <div
                className={`p-2 col-example text-center ${styles.iconeffect}`}
              >
                <p>
                  <FontAwesomeIcon
                    icon={["fab", "js"]}
                    id="javascript"
                    className={styles.icon}
                  />
                </p>
                <p>Javascript</p>
              </div>
              <div
                className={`p-2 col-example text-center ${styles.iconeffect}`}
              >
                <p>
                  <FontAwesomeIcon
                    icon={["fab", "html5"]}
                    id="html5"
                    className={styles.icon}
                  />
                </p>
                <p>HTML5</p>
              </div>
              <div
                className={`p-2 col-example text-center ${styles.iconeffect}`}
              >
                <p>
                  <FontAwesomeIcon
                    icon={["fab", "css3-alt"]}
                    id="css3"
                    className={styles.icon}
                  />
                </p>
                <p> CSS3</p>
              </div>
              <div
                className={`p-2 col-example text-center ${styles.iconeffect}`}
              >
                <p>
                  <FontAwesomeIcon
                    icon={["fab", "bootstrap"]}
                    id="bootstrap"
                    className={styles.icon}
                  />
                </p>
                <p>Bootstrap</p>
              </div>
            </Row>
            {/* Second Row */}
            {/* Third column */}
            <Row md={5} xs={3} className="d-flex justify-content-center">
              <div
                className={`p-2 col-example text-center ${styles.iconeffect}`}
              >
                <p>
                  <FontAwesomeIcon
                    icon={["fab", "sass"]}
                    id="sass"
                    className={styles.icon}
                  />
                </p>
                <p>Sass</p>
              </div>
              <div
                className={`p-2 col-example text-center ${styles.iconeffect}`}
              >
                <p>
                  <FontAwesomeIcon
                    icon={["fas", "code"]}
                    className={styles.icon}
                  />
                </p>
                <p>C# MVC</p>
              </div>
              <div
                className={`p-2 col-example text-center ${styles.iconeffect}`}
              >
                <p>
                  <FontAwesomeIcon
                    icon={["fas", "database"]}
                    className={styles.icon}
                  />
                </p>
                <p>SQL Server</p>
              </div>
              <div
                className={`p-2 col-example text-center ${styles.iconeffect}`}
              >
                <p>
                  <FontAwesomeIcon
                    icon={["fas", "database"]}
                    className={styles.icon}
                  />
                </p>
                <p>MySQL</p>
              </div>
              <div
                className={`p-2 col-example text-center ${styles.iconeffect}`}
              >
                <p>
                  <FontAwesomeIcon
                    icon={["fab", "node-js"]}
                    id="node"
                    className={styles.icon}
                  />
                </p>
                <p>Node.js</p>
              </div>
            </Row>
          </div>
        </FadeInSection>
      </Fragment>
    );
  }
}
