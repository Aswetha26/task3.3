
import './App.css';
import { SliderPicker } from "react-color";
import React from "react";

export default function App() {
  const [color, setColor] = React.useState({ hex: "#FFFFFF" });
  return (
    <div class='bg'>
    <center>
    <div className="App">
      <h1>Color Picker</h1>
      
      <SliderPicker
        color={color}
        onChangeComplete={(color) => setColor(color)}
      />
      <br></br><br></br>
      <button class='button'>Pick a color</button>
    </div>
    </center></div>
  );
}

