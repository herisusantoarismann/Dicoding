import React from "react";
import PropTypes from "prop-types";

export const LanguageContext = React.createContext();

const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = React.useState("id");

  const toggleLanguage = () => {
    setLanguage((prevState) => (prevState === "id" ? "en" : "id"));
  };

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
