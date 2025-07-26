import React, { createContext, useContext, useEffect, useState } from "react";

// Create a ThemeContext
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Get the saved theme from localStorage or default to 'light'
    return window.localStorage.getItem("dark") || "light";
  });

  useEffect(() => {
    const root = document.documentElement;

    // Apply or remove 'dark' class based on the current theme
    if (theme === "dark") {
      root.classList.add("dark");
      window.localStorage.setItem("dark", "dark"); // Store 'dark' in localStorage
    } else {
      root.classList.remove("dark");
      window.localStorage.setItem("dark", "light"); // Store 'light' in localStorage
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);
