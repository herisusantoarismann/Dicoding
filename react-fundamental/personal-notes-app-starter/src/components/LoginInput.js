import React from "react";
import { Link } from "react-router-dom";

const LoginInput = () => {
  return (
    <section class="login-page">
      <h2>Yuk, login untuk menggunakan aplikasi.</h2>
      <div class="input-login">
        <label for="email">Email</label>
        <input type="email" id="email" value="" />
        <label for="password">Password</label>
        <input type="password" id="password" value="" />
        <button type="button">Login</button>
      </div>
      <p>
        Belum punya akun? <Link to="/register">Daftar di sini</Link>
      </p>
    </section>
  );
};

export default LoginInput;
