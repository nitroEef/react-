import colorNames from "colornames";
import React from "react";

const Input = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <form onclick={(e) => e.preventDefault()}>
      <input
        type="text"
        autoFocus
        placeholder="add color name"
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
{/*       
The <form> element prevents its default behavior of submitting when clicked.
   It contains an <input> field that captures user input for a color name. 
   This input updates both colorValue and hexValue states via onChange event, 
   where colorValue reflects the user input and hexValue gets computed based
    on the color name using the colorNames function. Additionally, autoFocus
 ensures the input field is focused when the page loads, and required makes the input mandatory. */}

      <button
        onClick={(e) => {
          e.preventDefault();
          setIsDarkText(!isDarkText);
        }}
      >
        Toggle Text Color
      </button>
      
{/* The <button> element, when clicked, toggles the isDarkText state,
   which controls whether the text color is dark or light. 
   e.preventDefault() prevents the default behavior of the button,
    such as form submission or link navigation. */}






    </form>

  );
};

export default Input;
