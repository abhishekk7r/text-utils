import React, { useState } from "react";

const TextForm = (props) => {
  const handleUpClick = () => {
    console.log("handleUpClick was Clicked");
  };

  const handleOnChange = (event) => {
    console.log(event);
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter Your Text Here");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="18"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert To Uppercase
      </button>
    </div>
  );
};

export default TextForm;
