import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Aboutme from "./Aboutme";
import MyProjects from "./MyProjects";
import Resume from "./Resume/Resume";

const Main = () => (
  <HashRouter basename='/'>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/aboutme" component={Aboutme} />
      <Route exact path="/myprojects" component={MyProjects} />
      <Route exact path="/resume" component={Resume} />
    </Switch>
  </HashRouter>
);

// const Home = () => { <div><h2>Home</h2></div> }
// const Contact = () => <div><h2>Contact</h2></div>
// const AboutMe = () => <div><h2>AboutMe</h2></div>
// const MyProjects = () => <div><h2>MyProjects</h2></div>
// const Resume = () => <div><h2>Resume</h2></div>

export default Main;
