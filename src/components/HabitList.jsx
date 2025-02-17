import React, { useState } from "react";
import Habit from "./Habit";
import HabitForm from "./HabitForm";

const HabitList = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: "Drink Water" },
    { id: 2, name: "Exercise" },
    { id: 3, name: "Read a Book" },
  ]);

  const addHabit = (habitName) => {
    if (habitName) {
      const newHabit = {
        id: Date.now(),
        name: habitName,
      };
      setHabits([...habits, newHabit]);
    }
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  const markAllAsComplete = () => {
    alert("Mark all as complete functionality is still under development.");
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">My Habits</h2>
      <HabitForm onAddHabit={addHabit} />
      <button className="btn btn-success mb-3" onClick={markAllAsComplete}>
        Mark All as Complete
      </button>
      {habits.length > 0 ? (
        habits.map((habit) => (
          <Habit key={habit.id} name={habit.name} onDelete={() => deleteHabit(habit.id)} />
        ))
      ) : (
        <p className="text-muted">No habits available. Add a new habit to get started!</p>
      )}
    </div>
  );
};

export default HabitList;
