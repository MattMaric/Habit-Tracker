import React, {useState} from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState("#home");

  return (
    <header className="bg-primary text-white py-3 sticky-top">
      <nav className="navbar navbar-expand-md navbar-dark container">
        <a
          className={`navbar-brand ${activeLink === "#home" ? "active" : ""}`}
          href="#home"
          onClick={() => setActiveLink("#home")}
        >
          Habit Tracker
        </a>
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
              <a className={`nav-link ${activeLink === "#habit-list" ? "active" : ""}`} 
                href="#habit-list" 
                onClick={() => setActiveLink("#habit-list")}>
                Habit List
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === "#progress-tracker" ? "active" : ""}`} 
                href="#progress-tracker" 
                onClick={() => setActiveLink("#progress-tracker")}>
                Progress Tracker
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <p className="text-center mt-2">Welcome! Track your habits and stay on top of your goals.</p>
    </header>
  );
};

export default Header;
