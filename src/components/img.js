import React, { Component } from "react";
import "../App.css";
class Img extends Component {
  render() {
    return (
      <div className="img">
        <div className="img1">
          <img src={this.props.source} alt="logo" />
        </div>
        <h4>{this.props.name}</h4>
      </div>
    );
  }
}
export default Img;
