import React, { useState } from "react";
import "../Styles/TextForm-style.css";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
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
      <div>
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
        <p className="h5">
          {text.split(" ").length} words and {text.length} Characters
        </p>
        <p>
          {parseFloat(0.008 * text.split(" ").length).toFixed(2)} Minute read
        </p>
        <h3>Preview</h3>
        <p>{text?text:'Enter the text you want to preview in the Textarea'}</p>
      </div>
    </>
  );
};

export default TextForm;
