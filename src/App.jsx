import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TitleText from "./Title/index.jsx";
import MainContainer from "./MainContainer/index.jsx";
import Form from "./Form/index.jsx";



function App() {
  return (
    <>
      <TitleText />

      <MainContainer />
    </>
  );
}

export default App;
