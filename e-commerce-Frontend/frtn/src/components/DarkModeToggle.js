import React from "react";
import { useTheme } from "../context/ThemeContext";
import "../styles/DarkModeToggle.css";

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="toggle-container">
    <button
      onClick={() => setDarkMode(!darkMode)}
      
      className={`circle-toggle ${darkMode ? "dark" : "light"}`}
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
    </div>
  );
};

export default DarkModeToggle;