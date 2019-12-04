import React from "react";
import { Link } from "react-router-dom";

const LIBRARY_HEADER = "Libary Manager";
const ADMIN_LOGIN = "Log In as Admin";
const STUDENT_LOGIN = "Log In as Student";

const Home = () => {
  return (
    <div className="homeScreenOptions">
      <h3 className="header">{LIBRARY_HEADER}</h3>
      <div className="loginOptionContainer">
        <Link to="/admin-login" className="option">
          {ADMIN_LOGIN}
        </Link>
        <Link to="/student-login" className="option">
          {STUDENT_LOGIN}
        </Link>
      </div>
    </div>
  );
};

export default Home;
