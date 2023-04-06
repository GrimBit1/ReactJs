// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import Accordian from "./components/Accordian";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
let name = "Aditya";
function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, status) => {
    setAlert({
      message: message,
      status: status,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <Router>
      <Navbar title="Aditya" showAlert={showAlert} />
      {/* <h1>{name}</h1> {/*we can use javascript in jsx as curly bracket*/}
      {/* <div className="hi">Hi</div> */}

      {alert != null ? <Alert alert={alert} /> : ""}

      <div className="container">
        <Switch>
          <Route exact path="/"> {/* If we dont write exact the react will check partialy */}
            <TextArea heading="TextArea" showAlert={showAlert} />
          </Route>
          <Route exact path="/about">
            <Accordian />

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
