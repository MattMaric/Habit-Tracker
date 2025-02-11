import React, { useState } from "react";
import Habit from "./Habit";

const HabitList = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: "Drink Water" },
    { id: 2, name: "Exercise" },
    { id: 3, name: "Read a Book" }
  ]);

  return (
    <div className="container my-4">
      <h2 className="mb-3">Your Habits</h2>
      {habits.length > 0 ? (
        habits.map((habit) => (
          <Habit key={habit.id} name={habit.name} />
        ))
      ) : (
        <p>No habits yet. Add a new habit to get started!</p>
      )}
    </div>
  );
};

export default HabitList;
