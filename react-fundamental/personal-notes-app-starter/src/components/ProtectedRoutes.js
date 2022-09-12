import React from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import LoginPage from "../pages/LoginPage";

const ProtectedRoutes = () => {
  const { authUser } = React.useContext(AuthContext);

  if (authUser === null) return <LoginPage />;

  return <Outlet />;
};

export default ProtectedRoutes;
