import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { LanguageContext } from "../context/LanguageContext";
import { useInput } from "../hooks/useInput";
import { getUserLogged, login, putAccessToken } from "../utils/api";
import { content } from "../utils/content";

const LoginPage = () => {
  const { language } = React.useContext(LanguageContext);
  const { setAuthUser } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");

  const onSubmit = () => {
    const credentials = { email: email, password: password };
    login(credentials).then((res) => {
      if (!res.error) {
        putAccessToken(res.data.accessToken);
        getUserLogged().then((res) => {
          if (!res.error) {
            setAuthUser(res.data);
          }
        });
      }
    });
  };

  return (
    <section className="login-page">
      <h2>{content[language].login.description}</h2>
      <div className="input-login">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="button" onClick={() => onSubmit()}>
          Login
        </button>
      </div>
      <p>
        {content[language].login.check}{" "}
        <Link to="/register">{content[language].login.anchor}</Link>
      </p>
    </section>
  );
};

export default LoginPage;
