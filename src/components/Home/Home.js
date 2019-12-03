import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="form options">
      <h3>Libary Manager</h3>
      <Link to="/admin-login" className="option">
        Admin Login
      </Link>
      <Link to="/student-login" className="option">
        Student Login
      </Link>
    </div>
  );
};

export default Home;
