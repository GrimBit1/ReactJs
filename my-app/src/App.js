// import logo from './logo.svg';
import "./App.css";
import Accordian from "./components/Accordian";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
let name = "Aditya";
function App() {
  return (
    <>
      <Navbar title='Aditya' />
      {/* <h1>{name}</h1> {/*we can use javascript in jsx as curly bracket*/}
      {/* <div className="hi">Hi</div> */}
      <div className="container">
        {/* <TextArea heading='TextArea'/> */}
        <Accordian />

      </div>
    </>
  );
}

export default App;
