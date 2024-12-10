import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Toggle = () => {
  const [theme, setTheme] = useState("dark");

  // Apply the default theme to the body when the component mounts
  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.add("dark"); // Ensure dark mode is enabled by default
  }, []);

  const change = () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark");
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <div className="flex flex-row gap-2 items-center">
      <p className="text-gray-500 dark:text-white uppercase">{theme}</p>
      <div className="relative">
        <input
          type="checkbox"
          id="toggle"
          onChange={change}
          className="sr-only peer"
          checked={theme === "dark"} // Make sure the checkbox reflects the current theme
        />
        <label
          htmlFor="toggle"
          className="cursor-pointer transition-all duration-300"
        >
          <div
            className={`transition-transform duration-700 ease-in-out transform ${
              theme === "light" ? "rotate-180 scale-110" : "rotate-0 scale-100"
            }`}
          >
            {theme === "light" ? (
              <FaSun className="w-5 h-5 text-yellow-400" />
            ) : (
              <FaMoon className="w-4 h-4 text-gray-700" />
            )}
          </div>
        </label>
      </div>
    </div>
  );
};

export default Toggle;
