import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import { useInput } from "../hooks/useInput";
import { register } from "../utils/api";
import { content } from "../utils/content";

const RegisterPage = () => {
  const { language } = React.useContext(LanguageContext);
  const navigate = useNavigate();
  const [name, handleNameChange] = useInput("");
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");
  const [passwordConfirmation, handlePasswordConfirmationChange] = useInput("");

  const onSubmit = () => {
    if (password !== passwordConfirmation)
      return alert("Password tidak cocok.");

    const credentials = {
      name: name,
      email: email,
      password: password,
    };
    register(credentials).then((res) => {
      if (!res.error) navigate("/");
    });
  };

  return (
    <section className="regsiter-page">
      <h2>{content[language].register.description}</h2>
      <div className="input-register">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
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
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={passwordConfirmation}
          onChange={handlePasswordConfirmationChange}
        />
        <button type="button" onClick={() => onSubmit()}>
          Register
        </button>
      </div>
      <p>
        {content[language].register.check}{" "}
        <Link to="/">{content[language].register.anchor}</Link>
      </p>
    </section>
  );
};

export default RegisterPage;
