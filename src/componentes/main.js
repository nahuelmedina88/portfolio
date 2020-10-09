import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Aboutme from "./Aboutme";
import MyProjects from "./MyProjects";
import Resume from "./Resume/Resume";

const Main = () => (
  <HashRouter basename='/portfolio'>
    <Switch>
      <Route exact path="/portfolio" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route path="/aboutme" component={Aboutme} />
      <Route exact path="/myprojects" component={MyProjects} />
      <Route exact path="/resume" component={Resume} />
    </Switch>
  </HashRouter>
);
export default Main;
