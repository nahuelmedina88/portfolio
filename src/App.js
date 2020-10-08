import React, { Component, Fragment } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./componentes/MenuNavigation.js";
// import MenuNavigation from "./componentes/MenuNavigation.js";
import Main from "./componentes/main";
import Footer from "./componentes/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";



library.add(fab, fas);

//import Flexbox from "./componentes/flexbox";

class App extends Component {
  render() {
    console.log(this);
    return (
      <Fragment>
        {/* <MenuNavigation /> */}
        <Main />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
