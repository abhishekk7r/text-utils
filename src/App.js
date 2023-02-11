// import logo from "./logo.svg";
// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import {useState} from "react";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import Alert from "./Components/Alert";

function App() {
  
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <BrowserRouter>
      <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutTitle="About" />
      <Alert alert={alert}/>
      <Routes>
        <Route
          path="/"
          element={<TextForm heading="Try Text Utils - Word Counter, Character Counter, Remove " mode={mode} showAlert={showAlert}/>}
        ></Route>
        <Route path="/About" element={<About mode={mode}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
