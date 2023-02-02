// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
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
        <TextForm heading="Enter your text to analayze" />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
