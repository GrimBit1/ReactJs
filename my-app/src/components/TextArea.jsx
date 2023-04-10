import React, { useState } from "react";

const TextArea = (props) => {
  const [text, settext] = useState("");
  const handleUpperCase = (event) => {
    if (text.trim() !== "") {
      settext(text.toUpperCase());
      props.showAlert("The text is uppercased", "success");
    }
  };
  const handleLowerCase = (event) => {
    if (text.trim() !== "") {
      settext(text.toLowerCase());
      props.showAlert("The text is lowercased", "success");
    }
  };
  const handleReset = (event) => {
    settext(``);
    props.showAlert("The text is reseted", "success");
  };
  const handleDummyText = (event) => {
    settext(
      `${text} Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque necessitatibus id quo mollitia temporibus quasi optio! Saepe magni minima ad dolorum molestiae voluptatem omnis placeat soluta labore possimus sunt, rerum consequuntur animi nostrum veniam!`
    );
    props.showAlert("The Dummy text is created", "success");
  };
  const handleOnChange = (event) => {
    settext(event.target.value);
    // console.log(event.target.value);
  };
  const handleOnAlternateCase = (event) => {
    if (text.trim() !== "") {
      try {
        settext(
          text
            .split(" ")
            .map((string) => {
              let temp = [];
              for (let i = 0; i < string.length; i++) {
                if (i % 2 === 0) {
                  temp.push(string[i].toLowerCase());
                } else {
                  temp.push(string[i].toUpperCase());
                }
              }

              string = temp.join("");
              return string;
            })
            .join(" ")
        );
        props.showAlert("The text is alternate case", "success");
      } catch (err) {
        props.showAlert("Error", "danger");
        console.log(err);
      }
    }
  };
  const handleOnCapitalizedCase = (event) => {
    if (text.trim() !== "") {
      try {
        settext(
          text
            .trim()
            .split(" ")
            .map((string) => {
              if (string !== undefined || string !== " ") {
                return `${string[0].toUpperCase()}${string.slice(1)}`;
              }
            })
            .join(" ")
        );
        props.showAlert("The text is captilized", "success");
      } catch (err) {
        props.showAlert("Error", "danger");
        console.log(err);
      }
    }
  };
  const handleCopy = (event) => {
    if (text.trim() !== "") {
      document.getElementById("exampleFormControlTextarea1").select();
      navigator.clipboard.writeText(text);
      props.showAlert("The text is copied", "success");
    }
  };

  return (
    <>
      <div className="mb-3 my-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h4>{props.heading}</h4>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          onChange={(event) => handleOnChange(event)}
          value={text}
        ></textarea>
      </div>
      <button
        className="btn btn-primary"
        onClick={(event) => handleUpperCase(event)}
      >
        Convert to UpperCase
      </button>
      <button
        className="btn btn-primary mx-4"
        onClick={(event) => handleLowerCase(event)}
      >
        Convert to LowerCase
      </button>
      <button
        className="btn btn-danger"
        onClick={(event) => handleReset(event)}
      >
        Reset
      </button>
      <button
        className="btn btn-secondary mx-4"
        onClick={(event) => handleDummyText(event)}
      >
        Create Dummy Text
      </button>
      <button className="btn btn-secondary" onClick={handleOnAlternateCase}>
        Convert to aLtErNaTeCaSe
      </button>
      <button
        className="btn btn-secondary mx-4"
        onClick={handleOnCapitalizedCase}
      >
        Convert to Capitalized Case
      </button>
      <button className="btn btn-secondary " onClick={handleCopy}>
        Copy All
      </button>
      <div className="container">
        <h1>Your text Summary</h1>
        <p>
          {text.trim() !== "" ? text.trim().split(" ").length : 0} Words and{" "}
          {text.length} Characters
        </p>
        <h2>Preview</h2>
        <p>{text.trim() !== "" ? text : "Enter Something to preview here"}</p>
      </div>
    </>
  );
};

export default TextArea;
