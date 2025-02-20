import React, { useState } from "react";
import React, { Bicycling }  from "./component/DurationExercise/index.js";
import React, { PushUps , JumpingJacks, SitUps } from './component/RepetitionExercise/index.js';
import React, { Running } from "react";'./component/RunningExercise/index.js';
import { useState } from "react";
import 'app.css'

function ButtonList() {
  const [selectedButton, setSelectedButton] = useState(null); 

  const handleClick= (e) => {
    const buttonId = e.target.id;
    setSelectedButton(buttonId);
  };

  return(
    <div onClick={handleClick}>
      <button id="PushUps">Push Ups</button>
      <button id="Bicycling">Bicycling</button>
      <button id="JumpingJacks">Jumping Jacks</button>
      <button id="Running">Running</button>
      <button id="SitUps">Sit Ups</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Ready for this</h1>
      <h2>Choose the Exercise: {excerise}</h2>
      <ButtonList />
    </div>
  );
}
export default App;