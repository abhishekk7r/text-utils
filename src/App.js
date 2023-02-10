// import logo from "./logo.svg";
// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";

function App() {
  // const [mode, setMode] = useState(null);
  // const [first, setfirst] = useState(null);

  return (
    <BrowserRouter>
      <NavBar title="TextUtils" aboutTitle="About" />
      {/* <div className="container-lg my-3">
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
