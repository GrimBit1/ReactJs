import NewsComponent from "./components/NewsComponent";
import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";

export default class App extends Component {
  c = "john";
  render() {
    return (
      <div>
        <Navbar />
        <div className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
          News Monkey - Get your daily dose of news daily
        </div>
        <NewsComponent />
      </div>
    );
  }
}
