import React from "react";

const StudentHome = () => {
  return (
    <div>
      <h1>Student Ka home</h1>
      <form method="GET" action="/student-login">
        <input
          type="text"
          name="bookName"
          placeholder="Search By Book Name / Book Id"
          required
        />
        <input type="submit" value="Search Book" />
      </form>
      <div>I have this books</div>
      <div>I have this books</div>
      <div>I have this books</div>
    </div>
  );
};

export default StudentHome;
