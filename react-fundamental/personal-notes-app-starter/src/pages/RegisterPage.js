import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <section class="regsiter-page">
      <h2>Isi form untuk mendaftar akun.</h2>
      <div class="input-register">
        <label for="name">Name</label>
        <input type="text" id="name" value="" />
        <label for="email">Email</label>
        <input type="email" id="email" value="" />
        <label for="password">Password</label>
        <input type="password" id="password" value="" />
        <label for="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" value="" />
        <button type="button">Register</button>
      </div>
      <p>
        Sudah punya akun? <Link to="/">Login di sini</Link>
      </p>
    </section>
  );
};

export default RegisterPage;
