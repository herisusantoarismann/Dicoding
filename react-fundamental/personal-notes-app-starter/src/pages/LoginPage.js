import React from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import { useInput } from "../hooks/useInput";
import { content } from "../utils/content";

const LoginPage = () => {
  const { language } = React.useContext(LanguageContext);
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");

  const onSubmit = () => {
    console.log(email, password);
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
