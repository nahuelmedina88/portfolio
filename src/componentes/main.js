import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Aboutme from "./Aboutme";
import MyProjects from "./MyProjects";
import Resume from "./Resume/Resume";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/aboutme" component={Aboutme} />
    <Route exact path="/myprojects" component={MyProjects} />
    <Route exact path="/resume" component={Resume} />
  </Switch>
);

export default Main;
