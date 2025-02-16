import "index.css"
import React, { useState } from 'react';

function App(){
  let [count, changeCounter] = useState(0);

  const exercise = document.getElementById('excerise');

  return (
    <div>
      <h1>Exercise: {exercise} </h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}
