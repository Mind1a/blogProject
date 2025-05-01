import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // theme
    const savedTheme = localStorage.getItem("theme");

    const systemPreferDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPreferDark) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    //                            dark / light
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      className="top-6 right-6 absolute bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 p-2 rounded-full"
      onClick={toggleTheme}
    >
      {theme === "dark" ? <span>🌞</span> : <span>🌛</span>}
    </button>
  );
};

export default ThemeToggle;
