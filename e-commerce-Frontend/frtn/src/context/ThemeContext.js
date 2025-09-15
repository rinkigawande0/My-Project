import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) =>{
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode")==="true"
  );

  useEffect(()=>{
    localStorage.setItem("darkMode",darkMode);
    document.body.className = darkMode ? "dark" : "";
  },[darkMode]);

  return(
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);