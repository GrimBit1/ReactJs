import React, { Component } from "react";
import loading from "./loading.gif";
export default class Loading extends Component {
  render() {
    return (
      <div className="content-center self-center">
        <img src={loading} alt="Loading" />
      </div>
    );
  }
}
