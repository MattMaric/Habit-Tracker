import React, { useState } from "react";

const HabitForm = ({ onAddHabit }) => {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName.trim()) {
      onAddHabit(habitName);
      setHabitName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label htmlFor="habitName" className="form-label">New Habit</label>
        <input
          type="text"
          id="habitName"
          className="form-control"
          placeholder="Enter habit name"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Habit</button>
    </form>
  );
};

export default HabitForm;
