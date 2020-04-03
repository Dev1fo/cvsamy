import React, { Component } from "react";

import HeaderName from "./components/HeaderName";
import NavBar from "./components/Navbar";
import PrintAndDownload from "./components/PrintAndDownload";
// import logo from "./logo.svg";
import "./App.css";
import Presentation from "./components/Presentation";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      //  MAIN CONTAINER
      <div id="main_container">
        {/* Header */}
        <div id="header">
          {/* <HeaderName /> */}
          {/* <NavBar /> */}
          {/* <PrintAndDownload /> */}
          {/* <Presentation /> */}
          {/* <Main /> */}
          {/* <Footer /> */}
        </div>
      </div>
    );
  }
}

export default App;
