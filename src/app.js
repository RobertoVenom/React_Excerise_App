import { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
    { name: "Push Ups", type: "repetition" },
    { name: "Sit Ups", type: "repetition" },
    { name: "Plank", type: "duration" },
    { name: "Wall Sit", type: "duration" },
  ];

  if (selectedExercise) {
    if (selectedExercise.type === "repetition") {
      return (
        <RepetitionExercise name={selectedExercise.name} />
      );
    } else {
      return (
        <DurationExercise name={selectedExercise.name} />
      );
    }
  }

  return (
    <div>
      <h1>Exercise Tracker</h1>
      {exercises.map((exercise, index) => (
        <button
          key={index}
          onClick={() => setSelectedExercise(exercise)}
        >
          {exercise.name}
        </button>
      ))}
    </div>
  );
}

export default App;
