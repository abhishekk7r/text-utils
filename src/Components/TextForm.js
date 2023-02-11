import React, { useState } from "react";
import "../Styles/TextForm-style.css";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert()
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
  };

  const handleOnChange = (event) => {
    console.log(event);
    setText(event.target.value);
  };

  const handleClearText = () => {
    setText("");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const copyText = () => {
    let copy = document.getElementById("myBox");
    copy.select();
    navigator.clipboard.writeText(copy.value);
  };

  return (
    <>
      <div className="container-lg my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="12"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary lowerCase" onClick={handleLowClick}>
          Convert To LoweCase
        </button>
        <button className="btn btn-primary lowerCase" onClick={handleClearText}>
          Clear
        </button>
        <button onClick={copyText} className="btn btn-primary lowerCase">
          Copy text
        </button>
        <button
          onClick={handleExtraSpace}
          className="btn btn-primary lowerCase"
        >
          Remove Spaces
        </button>
      </div>
      <div className="container my-4">
        <h2 className="h2">Text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
};

export default TextForm;

