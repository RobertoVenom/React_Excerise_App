import { useState, useEffect } from "react";

function DurationExercise({ name }) {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>{formatTime(time)}</p>

      <button onClick={() => setRunning(true)}>
        Start
      </button>

      <button onClick={() => {
        setRunning(false);
        setTime(0);
      }}>
        Reset
      </button>
    </div>
  );
}

export default DurationExercise;
