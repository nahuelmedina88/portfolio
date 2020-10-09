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
      <Route exact path="/portfolio/#/" component={Home} />
      <Route exact path="/portfolio/#/contact" component={Contact} />
      <Route exact path="/portfolio/#/aboutme" component={Aboutme} />
      <Route exact path="/portfolio/#/myprojects" component={MyProjects} />
      <Route exact path="/portfolio/#/resume" component={Resume} />
    </Switch>
  </HashRouter>
);
export default Main;
