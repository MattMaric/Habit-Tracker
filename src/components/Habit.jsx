import React, { useState } from "react";

const Habit = ({ name }) => {
  const [streak, setStreak] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    if (!completed) {
      setStreak(streak + 1);
      setCompleted(true);
    }
  };

  const resetStreak = () => {
    setStreak(0);
    setCompleted(false);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Current Streak: {streak} day(s)</p>
        <button 
          className={`btn ${completed ? "btn-success" : "btn-primary"} me-2`} 
          onClick={handleComplete}
          disabled={completed}
        >
          {completed ? "Completed" : "Mark as Complete"}
        </button>
        <button className="btn btn-danger" onClick={resetStreak}>
          Reset Streak
        </button>
      </div>
    </div>
  );
};

export default Habit;
