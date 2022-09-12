import React from "react";
import PropTypes from "prop-types";

export const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = React.useState(null);

  const Login = (value) => {
    setAuthUser(value);
  };

  const Logout = () => {
    setAuthUser(null);
  };

  const AuthContextValue = React.useMemo(() => {
    return {
      authUser,
      Login,
      Logout,
    };
  }, [authUser]);

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
