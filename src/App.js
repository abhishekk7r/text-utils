// import logo from "./logo.svg";
// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
<<<<<<< HEAD
import About from "./Components/About";

function App() {
  // const [mode, setMode] = useState(null);
  // const [first, setfirst] = useState(null);

  return (
    <BrowserRouter>
      <NavBar title="TextUtils" aboutTitle="About" />
      {/* <div className="container-lg my-3">
=======
// import About from "./Pages/About"
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState(`light`);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <NavBar
        title="TextUtils"
        aboutTitle="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container-lg my-3">
>>>>>>> 0bfbbe8cd048c693f093dfdf0127aa76cd8ce1d4
        <TextForm heading="Enter your text to analayze" />
      </div> */}

      <Routes>
        <Route
          path="/"
          element={<TextForm heading="Enter Your text To Analyze" />}
        ></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
