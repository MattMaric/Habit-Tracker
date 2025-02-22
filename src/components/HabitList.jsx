import React, { useState } from "react";
import Habit from "./Habit";
import HabitForm from "./HabitForm";
import ProgressTracker from "./ProgressTracker";

const HabitList = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: "Drink Water", completed: false, streak: 0 },
    { id: 2, name: "Exercise", completed: false, streak: 0 },
    { id: 3, name: "Read a Book", completed: false, streak: 0 },
  ]);

  const [completionDays, setCompletionDays] = useState(new Set());

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
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.completed ? habit : { ...habit, completed: true, streak: habit.streak + 1 }
      )
    );

    setCompletionDays((prevDays) => {
      const today = new Date().toDateString();
      const newDays = new Set(prevDays);
      newDays.add(today);
      return newDays;
    });
  };

  const resetAllHabits = () => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) => ({ ...habit, completed: false, streak: 0 }))
    );
    setCompletionDays(new Set());
  };

  const updateHabit = (id, updatedHabit) => {
    setHabits((prevHabits) =>
      prevHabits.map((h) => (h.id === id ? updatedHabit : h))
    );

    const today = new Date().toDateString();

    setCompletionDays((prevDays) => {
      const newDays = new Set(prevDays);
      
      if (updatedHabit.completed) {
        newDays.add(today);
      } else {
        // If there are no completed habits for today, remove today's date
        const anyCompleted = habits.some((habit) => habit.id !== id && habit.completed);
        if (!anyCompleted) {
          newDays.delete(today);
        }
      }

      return newDays;
    });
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
            habit={habit}
            onDelete={() => deleteHabit(habit.id)}
            onUpdate={updateHabit}
          />
        ))
      ) : (
        <p className="text-muted">No habits available. Add a new habit to get started!</p>
      )}

      <ProgressTracker
        totalCompleted={habits.filter((habit) => habit.completed).length}
        completionDays={completionDays.size}
      />
    </div>
  );
};

export default HabitList;
