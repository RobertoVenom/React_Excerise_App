import 'index.css';
import React, { useState } from 'react';
import React from 'react';

function App(){
  let startTime;
  let running = false;
  let timerInterval;

  const display = document.getElementById('display');
  const startStopButton = document.getElementById('startStop');
  const resetButton = document.getElementById('reset');

  function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const ms = milliseconds % 1000;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    const formattedMs = String(ms).padStart(3, '0');
    return `${formattedMinutes}:${formattedSeconds}:${formattedMs}`;
  }

  function updateDisplay() {
      const currentTime = running ? Date.now() - startTime : 0;
      display.textContent = formatTime(currentTime);
  }

  function startStop() {
    if (running) {
      clearInterval(timerInterval);
      running = false;
      startStopButton.textContent = 'Resume';
    } else {
      startTime = startTime ? startTime + (Date.now() - (startTime + (parseInt(display.textContent.slice(0,2)) * 60000) + (parseInt(display.textContent.slice(3,5)) * 1000) + (parseInt(display.textContent.slice(6,9))))) : Date.now();
      timerInterval = setInterval(updateDisplay, 10);
      running = true;
      startStopButton.textContent = 'Pause';
    }
  }

  function reset() {
    clearInterval(timerInterval);
    running = false;
    startTime = 0;
    updateDisplay();
    startStopButton.textContent = 'Start';
  }

  startStopButton.addEventListener('click', startStop);
  resetButton.addEventListener('click', reset);

  updateDisplay();

  let [count, changeCounter] = useState(0);

  const excerise = document.getElementById('Running');

  return (
    <div className='App'>
      <h2>Exercise: {excerise} </h2>
      <p>Time: <span id="display">00:00:00</span></p>
        <p>Laps: {count}</p>
        <button onClick={() => startStop}>Start</button>
        <button onClick={() => setCount(count + 1)}>Add</button>
        <button onClick={() => reset }>Reset</button>
        <button id='return'>Return</button>
    </div>
  );
}
