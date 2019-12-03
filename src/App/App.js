import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import StudentLogin from "../components/StudentLogin/StudentLogin";
import AdminLogin from "../components/AdminLogin/AdminLogin";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/student-login" component={StudentLogin} />
      <Route path="/admin-login" component={AdminLogin} />
    </Router>
  );
};

export default App;
