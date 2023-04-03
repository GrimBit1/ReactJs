// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import Accordian from "./components/Accordian";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
let name = "Aditya";
function App() {
  const [alert, setAlert] = useState(null)

  const showAlert = (message, status) => {
    setAlert({
      message: message,
      status: status
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
  return (
    <>
      <Navbar title='Aditya' showAlert={showAlert} />
      {/* <h1>{name}</h1> {/*we can use javascript in jsx as curly bracket*/}
      {/* <div className="hi">Hi</div> */}
      
       {alert != null?<Alert alert={alert} />:''}
      
      <div className="container">
        <TextArea heading='TextArea' showAlert={showAlert}/>
        {/* <Accordian /> */}

      </div>
    </>
  );
}

export default App;
