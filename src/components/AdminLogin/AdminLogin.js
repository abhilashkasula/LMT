import React from "react";

const AdminLogin = () => {
  return (
    <form method="POST">
      <h1>Admin Login</h1>
      <input type="text" name="id" />
      <input type="text" name="password" />
      <input type="submit" />
    </form>
  );
};

export default AdminLogin;
