import React, { Component, Fragment } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styles from "./css/MenuNavegation.module.scss";
import "./css/bootstrapFix.scss";

export default class MenuNavigation extends Component {
  render() {
    return (
      <Fragment>
        <Navbar className={styles.menu} bg="dark" variant="dark" expand="lg">
          <Navbar.Brand
            className={`${this.props.route === "/" ? styles.brand : styles.brand2
              }`}
            href="/"
          >
            Nahuel Medina Senn
          </Navbar.Brand>
          <Navbar.Toggle
            className={`${this.props.route === "/" ? styles.toggle : styles.toggle2
              }`}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse
            className={`${this.props.route === "/" ? styles.collapse : styles.collapse2
              }`}
            id="basic-navbar-nav"
          >
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/aboutme">About Me</Nav.Link>
              <Nav.Link href="/myprojects">My Projects</Nav.Link>
              <Nav.Link href="/resume">Resume</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}
