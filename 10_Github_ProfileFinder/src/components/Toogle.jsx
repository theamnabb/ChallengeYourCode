import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Import sun and moon icons

const Toggle = () => {
  const [theme, setTheme] = useState("dark");

  const change = () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark"); // Toggle dark mode
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <div className="flex flex-row gap-2 items-center">
      <p className="dark:text-gray-500 text-white uppercase">{theme}</p>
      <div className="relative">
        <input
          type="checkbox"
          id="toggle"
          onChange={change}
          className="sr-only peer"
        />
        <label
          htmlFor="toggle"
          className="cursor-pointer transition-all duration-300"
        >
          {theme === "light" ? (
            <FaSun className="w-5 h-5 text-white" /> // Sun icon for light mode
          ) : (
            <FaMoon className="w-4 h-4 text-gray-300" /> // Moon icon for dark mode
          )}
        </label>
      </div>
    </div>
  );
};

export default Toggle;
