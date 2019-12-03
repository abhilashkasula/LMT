import React from "react";

const AdminLogin = () => {
  return (
    <form method="POST" action="/admin-login">
      <h1>Admin Login</h1>
      <input type="text" name="id" />
      <input type="password" name="password" />
      <input type="submit" />
    </form>
  );
};

export default AdminLogin;
