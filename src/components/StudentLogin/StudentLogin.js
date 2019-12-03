import React from "react";

const StudentLogin = () => {
  return (
    <form method="POST" action="/student-login">
      <h1>Student Login</h1>
      <input type="text" name="id" />
      <input type="password" name="password" />
      <input type="submit" />
    </form>
  );
};

export default StudentLogin;
