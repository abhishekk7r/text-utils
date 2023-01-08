// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <NavBar title="TextUtils" aboutTitle="About" />
      <div className="container-lg my-3">
        <TextForm heading="Enter your text to analayze" />
      </div>
    </>
  );
}

export default App;
