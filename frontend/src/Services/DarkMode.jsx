/** @format */

import { useEffect } from "react";

const useDarkMode = () => {
  useEffect(() => {
    const updateTheme = (e) => {
      if (e.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    // Check the initial theme and apply it
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    updateTheme(mediaQuery);

    // Add a listener for theme changes
    mediaQuery.addEventListener("change", updateTheme);

    // Cleanup listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", updateTheme);
    };
  }, []);
};

export default useDarkMode;
