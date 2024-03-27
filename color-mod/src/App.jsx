import { useState } from "react";
import Square from "./Square";
import Input from "./Input";
import "./App.css";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState("")



  return (
    <>
      <div className="rainbow">
        <Square 
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
        />

        <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
        />
      </div>
    </>
    // things we have at first in the return is known as react fragment
  );
}

export default App;
