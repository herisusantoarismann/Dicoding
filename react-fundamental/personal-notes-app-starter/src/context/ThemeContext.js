import React from "react";
import PropTypes from "prop-types";

export const ThemeContext = React.createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("dark");

  const toggleTheme = () => {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  React.useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    }
  }, []);

  const ThemeContextValue = React.useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={ThemeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.element,
};

export default ThemeContextProvider;
