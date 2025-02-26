import React from "react";

const ProgressTracker = ({ totalCompleted, completionDays }) => {
  return (
    <div className="card my-4">
      <div className="card-body">
        <h4 className="card-title text-center mb-4">Progress Tracker</h4>
        <p className="card-text">
          <strong>Total Completed Habits:</strong> {totalCompleted}
        </p>
        <p className="card-text">
          <strong>Days with Completed Habits:</strong> {completionDays}
        </p>
      </div>
    </div>
  );
};

export default ProgressTracker;
