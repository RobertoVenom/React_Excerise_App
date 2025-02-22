import 'index.css';
import React, { useState } from 'react';

function App(){
  let [count, changeCounter] = useState(0);

  const running = document.getElementById('excerise');

  return (
    <div className='App'>
      <h2>Exercise: {running} </h2>
        <p>Laps: {count}</p>
        <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}
