import React from "react";
import { FaTimes } from "react-icons/fa";

const Habit = ({ name, completed, streak, onDelete, onComplete, onReset }) => {
  return (
    <div className="card mb-2">
      <div className="card-body d-flex justify-content-between">
        <div>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Current Streak: {streak} day(s)</p>
        </div>
        <div>
          <FaTimes 
          className="position-absolute top-0 end-0 m-2 text-danger" 
          style={{ cursor: "pointer" }} 
          onClick={onDelete} 
        />
        </div>
      </div>
      <div className="card-body">
        <button
          className={`btn ${completed ? "btn-success" : "btn-primary"} me-2`}
          onClick={onComplete}
          disabled={completed}
        >
          {completed ? "Completed" : "Mark as Complete"}
        </button>
        <button className="btn btn-danger" onClick={onReset}>
          Reset Streak
        </button>
      </div>
    </div>
  );
};

export default Habit;
