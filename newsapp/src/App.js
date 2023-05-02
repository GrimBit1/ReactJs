import "./App.css";

import React, { Component } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (<>

      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="business" element={<News key="business" category="business" />} />
          <Route path="entertainment" element={<News key="entertainment" category="entertainment" />} />
          <Route path="general" element={<News key="general" category="general" />} />
          <Route path="health" element={<News key="health" category="health" />} />
          <Route path="science" element={<News key="science" category="science" />} />
          <Route path="sports" element={<News key="sports" category="sports" />} />
          <Route path="technology" element={<News key="technology" category="technology" />} />
          <Route index element={<News key="home" category="" />} />
        </Routes>
      </BrowserRouter>

    </>);
  }
}
