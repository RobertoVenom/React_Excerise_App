import 'index.css';
import React, { useState } from 'react';

function App(){
  let [count, changeCounter] = useState(0);

  const exercise = document.getElementById('excerise');

  return (
    <div>
      <h2>Exercise: {exercise} </h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}
