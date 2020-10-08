import React, { Component, Fragment } from "react";
import styles from "./css/HomeHeader.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Background from "./images/backgroundimage1.jpg";
import nahueimage from "./css/nahue2020Zoom.jpg";
import "./css/HomeHeader.module.scss";
import "./css/bootstrapFix.scss";

// const rowStyle = {
//   backgroundImage: `url(${Background})`,
// };
export default class HomeHeader extends Component {
  componentDidMount() {
    console.log("La pucha que vale la pena estar vivo.");
  }

  render() {
    return (
      <Fragment>
        <Row
          className={`${styles.backgroundimg} d-flex align-items-center bd-highlight mb-3 example-parent`}
          // Style={rowStyle}
        >
          <Col
            md={{ span: 4, offset: 0 }}
            xs={12}
            className={`${styles.mainmessage}`}
          >
            <p className={`${styles.line1} ${styles.animtypewriter}`}>
              Hi There! I'm Nahuel
            </p>
            <p className={`${styles.line2} ${styles.animtypewriter2}`}>
              Web Developer
            </p>
            {/* <Row>
              <Col className="d-flex align-items-center"> */}
            <a
              href="/Contact"
              className={`btn btn-primary ${styles.btnNewProperties}`}
            >
              Contact Me!
            </a>
            {/* <div className={`${styles.img}`}></div> */}
          </Col>
          <Col md={{ span: 8, offset: 0 }}>
            {/*<svg width="777" height="480" viewBox="0 0 777 480" Style="">
              <title>my vector image</title>
              <g class="currentLayer" Style="">
                <title>Layer 1</title>

                 <path
                  className={styles.linea1}
                  fill="#34cc12"
                  fill-opacity="1"
                  stroke="#0bd50b"
                  stroke-opacity="1"
                  stroke-width="16"
                  stroke-dasharray="none"
                  stroke-linejoin="round"
                  stroke-linecap="butt"
                  stroke-dashoffset=""
                  fill-rule="nonzero"
                  opacity="1"
                  marker-start=""
                  marker-mid=""
                  marker-end="" *
                  // d="M 90,296 L326,294, M318,294 L415, 61,
                  // M 412,68 L512, 297, M509, 292 L638 ,-3"
                  id="svg_1"
                />
                <path
                  className={styles.circlePath}
                  fill="#0bd50b"
                  fill-opacity="1"
                  stroke="#1a1aeb"
                  stroke-opacity="1"
                  stroke-width="16"
                  stroke-dasharray="none"
                  stroke-linejoin="round"
                  stroke-linecap="butt"
                  stroke-dashoffset=""
                  fill-rule="nonzero"
                  opacity="1"
                  marker-start=""
                  marker-mid=""
                  marker-end=""
                  d="M29,297.5 C29,278.99171270718233 43.767955801104975,264 62,264 C80.23204419889503,264 95,278.99171270718233 95,297.5 C95,316.00828729281767 80.23204419889503,331 62,331 C43.767955801104975,331 29,316.00828729281767 29,297.5 Z"
                  id="svg_5"
                />
              </g>
                </svg>*/}
            <svg width="777" height="480" Style="">
              <title>my vector image</title>
              <g class="currentLayer" Style="">
                <title>Layer 1</title>
                <defs>
                  <pattern
                    id="img1"
                    patternUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="150"
                    height="130"
                  >
                    <image xlinkHref={nahueimage} width="130" height="80" />
                  </pattern>
                </defs>
                <path
                  className={styles.linea1}
                  fill="#34cc12"
                  fill-opacity="1"
                  stroke="#0bd50b"
                  stroke-opacity="1"
                  stroke-width="22"
                  stroke-dasharray="none"
                  stroke-linejoin="round"
                  stroke-linecap="butt"
                  stroke-dashoffset=""
                  fill-rule="nonzero"
                  opacity="1"
                  marker-start=""
                  marker-mid=""
                  marker-end=""
                  // d="M89.06051609027745,292.9763852964444 L325.28099207889795,290.61418053655814,M315.476717432035,296.8998949244518 L412.32711258736936,63.82902528234633,M411.32373804102997,71.6265506571473 L510.5363379562506,300.7604123661092,
                  // M510.10439194727985,292.251975776672 L639.2382521543924,-3.8110207957323468 "
                  id="svg_1"
                />
                <path
                  className={styles.circlePath}
                  // fill="#0bd50b"
                  // fill="url(#img1)"
                  fill-opacity="1"
                  stroke="#1a1aeb"
                  stroke-opacity="1"
                  stroke-width="16"
                  stroke-dasharray="none"
                  stroke-linejoin="round"
                  stroke-linecap="butt"
                  stroke-dashoffset=""
                  fill-rule="nonzero"
                  opacity="1"
                  marker-start=""
                  marker-mid=""
                  marker-end=""
                  d="M29,297.5 C29,278.99171270718233 43.767955801104975,264 62,264 C80.23204419889503,264 95,278.99171270718233 95,297.5 C95,316.00828729281767 80.23204419889503,331 62,331 C43.767955801104975,331 29,316.00828729281767 29,297.5 Z"
                  id="svg_5"
                />
              </g>
            </svg>
            {/* </Col>
            </Row> */}
          </Col>
        </Row>
      </Fragment>
    );
  }
}
