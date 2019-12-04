import React from "react";

const ADMIN_LOGIN = "Admin Login";

const AdminLogin = () => {
  return (
    <div className="adminLoginContainer">
      <h1 className="header">{ADMIN_LOGIN}</h1>
      <form
        method="POST"
        action="/admin-login"
        className="loginForm"
        autoComplete="off"
      >
        <input type="text" name="id" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default AdminLogin;
