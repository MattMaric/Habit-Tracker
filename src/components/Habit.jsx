import React, { useState } from "react";

const Habit = ({ name, onDelete }) => {
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
    <div className="card mb-2">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
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
        
        <button className="btn btn-outline-danger btn-delete" onClick={onDelete} style={{ border: "none" }}>
          <i className="bi bi-x-lg"></i>
        </button>
      </div>
    </div>
  );
};

export default Habit;
