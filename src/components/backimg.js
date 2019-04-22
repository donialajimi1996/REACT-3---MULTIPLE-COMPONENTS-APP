import React, { Component } from "react";
import "../App.css";
class Backimg extends Component {
  render() {
    return (
      <div className="backimg">
        <h4 className="h5">{this.props.des}</h4>
        <p className="name">{this.props.name}</p>
      </div>
    );
  }
}
export default Backimg;
