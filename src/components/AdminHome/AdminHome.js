import React from "react";

const AdminHome = () => {
  return (
    <div>
      <h1>Admin Ka home</h1>
      <form method="POST">
        <input type="text" name="bookName" placeholder="Book Name" required />
        <input type="text" name="bookName" placeholder="Book Id" required />
        <input type="text" name="bookName" value="none" required />
        <input type="submit" value="Add Book" />
      </form>
      <div>Book number 1</div>
      <div>Book number 1</div>
      <div>Book number 1</div>
    </div>
  );
};

export default AdminHome;
