import React from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import LoginPage from "../pages/LoginPage";
import { getAccessToken, getUserLogged } from "../utils/api";

const ProtectedRoutes = () => {
  const { authUser, setAuthUser } = React.useContext(AuthContext);

  React.useEffect(() => {
    if (getAccessToken()) {
      getUserLogged().then((res) => {
        if (!res.error) {
          setAuthUser(res.data);
        }
      });
    }
  }, []);

  if (authUser === null) return <LoginPage />;

  return <Outlet />;
};

export default ProtectedRoutes;
