import React from "react";

const Header = () => {
  return (
    <header className="bg-primary text-white py-3 sticky-top">
      <nav className="navbar navbar-expand-md navbar-dark container">
        <a className="navbar-brand" href="#home">Habit Tracker</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#habit-list">Habit List</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#progress-tracker">Progress Tracker</a>
            </li>
          </ul>
        </div>
      </nav>
      <p className="text-center mt-2">Welcome! Track your habits and stay on top of your goals.</p>
    </header>
  );
};

export default Header;
