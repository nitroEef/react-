import { useState } from "react";
import Square from "./Square";
import Input from "./Input";
import "./App.css";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true)



  return (
    <>
    
{/* In this code snippet, there is a component called <Square> 
  being rendered within a <div> element with the class name
     "rainbow". The <Square> component is passed several props:

colorValue: This prop likely represents a numerical value or
 code related to the color of the square.
hexValue: This prop likely represents the hexadecimal
 value of the color.
isDarkText: This prop likely determines whether the text displayed
 within the square should appear as dark text or light text based on the background color.
These props are passed to the <Square> component to configure 
  its appearance and behavior. The <Square> component will use
  these props internally to render its content accordingly.
  The purpose and functionality of the <Square> component
  are not provided in this snippet, but it's expected to render 
  a square element with specific color and text characteristics based on the provided props. */}
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
        
 {/* there is an <Input> component being used. It receives several props:

colorValue: This prop likely represents a value related to the color input by the user.
setColorValue: This prop is a function that allows updating the colorValue state.
setHexValue: This prop is a function that allows updating the hexadecimal value of the color.
isDarkText: This prop likely determines whether the text displayed within the input 
should appear as dark text or light text based on the input color.
setIsDarkText: This prop is a function that allows updating the isDarkText state.
These props are passed to the <Input> component to configure its behavior and allow
 it to interact with the state of the parent component. The <Input> component likely 
 includes an input field where users can input a color value, and it uses the provided 
 functions to update the color-related state in the parent component accordingly.
  Additionally, it may use the isDarkText prop to determine the text color based on the input color. */}







      </div>
    </>
    // things we have at first in the return is known as react fragment
  );
}

export default App;
