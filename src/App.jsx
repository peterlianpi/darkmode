import { useState } from "react";
import "./App.css";
import ThemeContext from "./ThemeContext";
import Toggler from "./Toggler";

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body{
  background-color: ${(props) => (props.darkMode ? "#334" : "#eef")} ;
  color:${(props) => (props.darkMode ? "#eee" : "#000")}
}
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <GlobalStyles darkMode={darkMode} />
        <h3>Dark Mode : </h3>
        <Toggler />
        <div>Hello World!</div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
