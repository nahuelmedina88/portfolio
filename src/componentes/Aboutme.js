import React, { Component, Fragment } from "react";
// import CoverImage from "./CoverImage";
// import Content from "./Content";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Background from "./images/nahuel2016.png";
import styles from "./css/Aboutme.module.scss";
import MenuNavigation from "./MenuNavigation.js";

export default class Aboutme extends Component {
  render() {
    return (
      <Fragment>
        <MenuNavigation route={this.props.match.path} />
        <Row className={styles.container}>
          <Col md={6} className="left-column">
            <h1 className={styles.title}>About Me</h1>
            <h4 className={styles.subtitle}>Subtitle</h4>
            <p>
              I started my journey in the software world 11 years ago. As a
              student I began to venture cautiously into this new world and with
              great enthusiasm. I got my Systems Analyst degree in 2013, un
              Argentina. Since then, I have worked in the systems area of ​​2
              companies in my country. I also did some freelance projects.
            </p>
            <p>
              Then, in 2017, I made a decision that had been postponing and went
              to study English in New Zealand. That trip opened doors to other
              worlds and I spent more than two years traveling. However, that
              did not mean that I moved away from the world of software
              development.
            </p>
            <p>
              I am a very curious and self-taught person. I am always learning
              new tools, new frame works and developing different ways of
              approaching and solving a problem.
            </p>
            <p>
              I like to keep myself updated in my area, because that is where I
              feel most comfortable.
            </p>
            <p>
              Today my wish is for software to be my main profession again.
              Nowdays I am based in Sweden and I would love to be part of a
              software development company, in person or freelance.
            </p>
            <p>
              In turn, I am more than welcome to more specific freelance
              projects.
            </p>
            <p>
              I like challenges and I look forward to contributing my gaze and
              my commitment to projects that allow me and you to grow.
            </p>
          </Col>
          <Col md={6} className="right-column">
            <img className="img-fluid" src={Background} alt="nahuelito"></img>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
