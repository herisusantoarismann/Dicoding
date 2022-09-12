import React from "react";
import PropTypes from "prop-types";

export const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [authed, setAuthed] = React.useState(null);

  const Login = (value) => {
    setAuthed(value);
  };

  const Logout = () => {
    setAuthed(null);
  };

  const AuthContextValue = React.useMemo(() => {
    return {
      authed,
      Login,
      Logout,
    };
  }, [authed]);

  return (
    <AuthContext.Provider value={AuthContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.element,
};

export default AuthContextProvider;
