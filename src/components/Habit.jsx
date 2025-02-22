import React from "react";
import { FaTimes } from "react-icons/fa";

const Habit = ({ habit, onDelete, onUpdate }) => {
  const handleComplete = () => {
    if (!habit.completed) {
      const updatedHabit = { ...habit, streak: habit.streak + 1, completed: true };
      onUpdate(habit.id, updatedHabit);
    }
  };

  const resetStreak = () => {
    const updatedHabit = { ...habit, streak: 0, completed: false };
    onUpdate(habit.id, updatedHabit);
  };

  return (
    <div className="card mb-2 d-flex flex-row align-items-center justify-content-between">
      <div className="card-body">
        <h5 className="card-title">{habit.name}</h5>
        <p className="card-text">Current Streak: {habit.streak} day(s)</p>
        <button 
          className={`btn ${habit.completed ? "btn-success" : "btn-primary"} me-2`} 
          onClick={handleComplete}
          disabled={habit.completed}
        >
          {habit.completed ? "Completed" : "Mark as Complete"}
        </button>
        <button className="btn btn-danger" onClick={resetStreak}>
          Reset Streak
        </button>
      </div>
      <FaTimes className="text-danger me-3" style={{ cursor: "pointer" }} onClick={onDelete} />
    </div>
  );
};

export default Habit;
