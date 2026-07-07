import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Settings = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="dashboard">
      <h1>Settings</h1>

      <label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleTheme}
        />
        Dark Mode
      </label>
    </div>
  );
};

export default Settings;