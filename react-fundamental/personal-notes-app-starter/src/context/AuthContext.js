import React from "react";
import PropTypes from "prop-types";
import {
  getAccessToken,
  getUserLogged,
  login,
  putAccessToken,
} from "../utils/api";

export const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = React.useState(null);

  const Logout = () => {
    localStorage.removeItem("accessToken");
    setAuthUser(null);
  };

  const AuthContextValue = React.useMemo(() => {
    return {
      authUser,
      setAuthUser,
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
