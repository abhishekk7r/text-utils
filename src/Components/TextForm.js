import React, { useState } from "react";
import "../Styles/TextForm-style.css";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleOnChange = (event) => {
    console.log(event);
    setText(event.target.value);
  };

  const handleClearText = () => {
    setText("");
    props.showAlert("TextBox Cleared", "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed from the textbox", "success");
  };

  const copyText = () => {
    let copy = document.getElementById("myBox");
    copy.select();
    navigator.clipboard.writeText(copy.value);
    document.getSelection().removeAllRanges();
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
            style={{
              color: props.mode === "light" ? "white" : "black",
              backgroundColor:
                props.mode === "dark" ? "lightskyblue" : "white ",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary "
          onClick={handleUpClick}
        >
          Convert To Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowClick}
        >
          Convert To LoweCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearText}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          onClick={copyText}
          className="btn btn-primary mx-1 my-1"
        >
          Copy text
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleExtraSpace}
          className="btn btn-primary mx-1 my-1"
        >
          Remove Spaces
        </button>
      </div>
      <div className="container my-4">
        <h2 className="h2">Text Summary</h2>
        <div style={{ color: props.mode === "light" ? "black" : "white" }}>
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
      </div>
    </>
  );
};

export default TextForm;
