import React, { Component } from "react";

class CardHeader extends Component {
  displayContent() {}
  render() {
    return (
      <div className="card-header" id="headingOne">
        <h2 className="mb-0">
          <button
            id={this.props.move}
            className="btn btn-link"
            type="button"
            data-toggle="collapse"
            data-target={this.props.content}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <h2 className={this.props.fontaws}> {this.props.name}</h2>
          </button>
        </h2>
      </div>
    );
  }
}

export default CardHeader;
