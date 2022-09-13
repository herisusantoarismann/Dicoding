import React from "react";
import PropTypes from "prop-types";

export const LanguageContext = React.createContext();

const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = React.useState("id");

  const toggleLanguage = () => {
    localStorage.setItem("locale", language === "id" ? "en" : "id");
    setLanguage((prevState) => (prevState === "id" ? "en" : "id"));
  };

  React.useEffect(() => {
    if (localStorage.getItem("locale")) {
      setLanguage(localStorage.getItem("locale"));
    }
  }, []);

  const LanguageContextValue = React.useMemo(() => {
    return {
      language,
      toggleLanguage,
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={LanguageContextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageContextProvider.propTypes = {
  children: PropTypes.element,
};

export default LanguageContextProvider;
