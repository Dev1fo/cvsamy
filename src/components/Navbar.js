import React, { Component } from "react";

class Navbar extends Component {
  openContent(e) {
    document
      .getElementById(e.target.href.slice(e.target.href.lastIndexOf("#") + 1))
      .click();
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active no_border purple">
              <a
                className="nav-link"
                href="#formation"
                onClick={e => this.openContent(e)}
              >
                Formations <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#competence"
                onClick={e => this.openContent(e)}
              >
                Compétences
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#experience"
                onClick={e => this.openContent(e)}
              >
                Expériences
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#projet"
                onClick={e => this.openContent(e)}
              >
                Projets
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
