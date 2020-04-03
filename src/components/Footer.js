import React, { Component } from "react";

class Footer extends Component {
  render() {
    var now = new Date();
    return (
      <div id="footer">
        <p class="footer_name">Liani Samy CV {now.getFullYear()}</p>
      </div>
    );
  }
}

export default Footer;
