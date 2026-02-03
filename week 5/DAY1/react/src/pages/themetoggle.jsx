import { useState } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px"
      }}
    >
      <h2>{theme.toUpperCase()} MODE</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeToggle;
