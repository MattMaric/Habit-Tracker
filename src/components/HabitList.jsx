import React, { useState } from "react";
import Habit from "./Habit";
import HabitForm from "./HabitForm";

const HabitList = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: "Drink Water", completed: false, streak: 0 },
    { id: 2, name: "Exercise", completed: false, streak: 0 },
    { id: 3, name: "Read a Book", completed: false, streak: 0 },
  ]);

  const addHabit = (habitName) => {
    if (habitName) {
      const newHabit = {
        id: Date.now(),
        name: habitName,
        completed: false,
        streak: 0,
      };
      setHabits([...habits, newHabit]);
    }
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  const markAllAsComplete = () => {
    setHabits(
      habits.map((habit) => ({
        ...habit,
        completed: true,
        streak: habit.completed ? habit.streak : habit.streak + 1,
      }))
    );
  };

  const resetAllHabits = () => {
    setHabits(habits.map((habit) => ({ ...habit, completed: false, streak: 0 })));
  };

  const handleComplete = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id
          ? { ...habit, completed: true, streak: habit.streak + 1 }
          : habit
      )
    );
  };

  const handleReset = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, completed: false, streak: 0 } : habit
      )
    );
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">My Habits</h2>
      <HabitForm onAddHabit={addHabit} />
      {habits.length > 0 && (
        <div>
          <button className="btn btn-success mb-3" onClick={markAllAsComplete}>
            Mark All as Complete
          </button>
          <button className="btn btn-danger mb-3 ms-2" onClick={resetAllHabits}>
            Reset All Habits
          </button>
        </div>
      )}
      {habits.length > 0 ? (
        habits.map((habit) => (
          <Habit
            key={habit.id}
            name={habit.name}
            completed={habit.completed}
            streak={habit.streak}
            onDelete={() => deleteHabit(habit.id)}
            onComplete={() => handleComplete(habit.id)}
            onReset={() => handleReset(habit.id)}
          />
        ))
      ) : (
        <p className="text-muted">No habits available. Add a new habit to get started!</p>
      )}
    </div>
  );
};

export default HabitList;
