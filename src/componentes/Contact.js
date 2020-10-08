import React, { Component, Fragment } from "react";
import styles from "./css/Contact.module.scss";
import Col from "react-bootstrap/Col";
import MenuNavigation from "./MenuNavigation.js";

export default class Contact extends Component {
  render() {
    return (
      <Fragment>
        <MenuNavigation route={this.props.match.path} />
        <div className={styles.container}>
          <form>
            <div className="form-row">
              <Col className="form-group">
                <label for="inputEmail4">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="berrypicker@inacuse.se"
                  required
                />
              </Col>
            </div>
            <div className="form-row">
              <Col className="form-group">
                <label for="inputAddress">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Richard Andersen"
                  required
                />
              </Col>
            </div>
            <div className="form-row">
              <Col className="form-group">
                <label for="inputCity">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  placeholder="Stockholm"
                />
              </Col>
            </div>
            <div className="form-row">
              <Col className="form-group">
                <label for="textareaMessage">Message</label>
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Write your Message . . ."
                  id="textareaMessage"
                  required
                ></textarea>
              </Col>
            </div>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}
