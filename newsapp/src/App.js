import "./App.css";

import React, { Component } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (<>

      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="business" element={<News key="business" category="business" />} />
          <Route exact path="entertainment" element={<News key="entertainment" category="entertainment" />} />
          <Route exact path="general" element={<News key="general" category="general" />} />
          <Route exact path="health" element={<News key="health" category="health" />} />
          <Route exact path="science" element={<News key="science" category="science" />} />
          <Route exact path="sports" element={<News key="sports" category="sports" />} />
          <Route exact path="technology" element={<News key="technology" category="technology" />} />
          <Route exact index element={<News key="home" category="" />} />
        </Routes>
      </BrowserRouter>

    </>);
  }
}
