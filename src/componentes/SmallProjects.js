import React from 'react';
import FadeInSection from "./FadeInSection";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./css/WorkExperience.module.scss";

const SmallProjects = () => {
    return (
        <FadeInSection>
            <Row
                md={2}
                className={styles.maindiv}
                Style="background-color:#03083ef5 !important;"
            >
                <Col md={6} className={`${styles.textdiv}`}>
                    <h2 className={styles.title}>SMALL PROJECTS THAT I'VE MADE TO PLAY</h2>
                    <p>
                        Argentina, where I am from, is a very complicated country when you want to know how much currency really costs. That's why I decided to develop a small app to calculate either the official value or the market value parallel to any currency in the world.
              </p>
                    <p>
                        This app is developed entirely in React. In the App I call two third-party APIs to get the updated values ​​of the currencies.
              </p>
                </Col>
                <Col
                    md={6}
                    className={`d-flex align-items-center ${styles.imagediv}`}
                >
                    <a
                        href="https://nahuelmedina88.github.io/ARSCurrencyConverter"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <img
                            src={require("./images/pesoConverter.jpg")}
                            alt="Conversor de moneda argentina"
                            className="img-fluid img-thumbnail"
                        ></img>
                    </a>
                </Col>
            </Row>
        </FadeInSection>

    );
}

export default SmallProjects;