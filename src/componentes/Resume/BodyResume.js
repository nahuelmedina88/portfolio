import React, { Component, Fragment } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./scss/BodyResume.module.scss";
import Skill from "./Skill";
import EducationItem from "./EducationItem";
import EmploymentItem from "./EmploymentItem";
import SectionResume from "./SectionResume";

export default class BodyResume extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col md={6} className={styles.leftColumn}>
            <SectionResume title="Employment" fontawesomeicon="briefcase" />
            <EmploymentItem
              date="May 2015 to September 2017"
              name="Boston Seguros"
              position="Software Developer"
              description="Creation and maintenance of new web modules and desktop apps."
              reference="http://www.boston.com.ar/"
            />
            <EmploymentItem
              date="Aug 2013 to May 2015"
              name="Sistran Consultores"
              position="Software Developer"
              description="I worked for a software company as outsourcing in an insurance
                company (Victoria Seguros)."
              reference="http://www.sistran.com.ar/"
            />
            <SectionResume title="Education" fontawesomeicon="graduation-cap" />
            <EducationItem
              date="September 2017 to December 2017"
              name="Auckland English Academy"
              titleschool="Intensive English Course"
            />
            <EducationItem
              date="March 2009 to August 2013"
              name="Instituto Superior de Formación Técnica No151"
              titleschool="Systems Analyst, Computer Programming."
            />
            <EducationItem
              date="March 2004 to December 2006"
              name="Escuela Media n°16, Merlo, Buenos Aires."
              titleschool="Bachelor in economic sciences."
            />
          </Col>
          <Col md={6} className={styles.rightColumn}>
            <SectionResume title="Skills" fontawesomeicon="star" />
            <div className={styles.skills}>
              <Skill name="Javascript" value="75" />
              <Skill name="React" value="65" />
              <Skill name="CSS3" value="90" />
              <Skill name="SASS" value="70" />
              <Skill name="Bootstrap" value="90" />
              <Skill name="Node JS" value="30" />
              <Skill name="C# MVC" value="70" />
              <Skill name="SQL Server" value="70" />
              <Skill name="MySQL Server" value="60" />
              <Skill name="PHP" value="70" />
              <Skill name="Wordpress" value="90" />
            </div>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
