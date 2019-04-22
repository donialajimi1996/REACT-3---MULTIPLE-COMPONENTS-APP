import React, { Component } from "react";
import "../App.css";
class Box extends Component {
  render() {
    return (
      <div className="box" style={{ backgroundColor: this.props.color }}>
        <h5 className="round ">{this.props.name}</h5>
        <hr />
        <div className="p-height">
          <p className="des-box ">{this.props.des}</p>
        </div>
        <button className="button ">En savoir plus</button>
      </div>
    );
  }
}
export default Box;
