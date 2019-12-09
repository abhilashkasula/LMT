import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Home/Home";
import StudentLogin from "../StudentLogin/StudentLogin";
import AdminLogin from "../AdminLogin/AdminLogin";
import AdminHome from "../AdminHome/AdminHome";
import StudentHome from "../StudentHome/StudentHome";
import Registration from "../Registration/Registration";
const App = () => {
	return (
		<Router>
			<Route exact path="/" component={Home} />
			<Route path="/student-login" component={StudentLogin} />
			<Route path="/admin-login" component={AdminLogin} />
			<Route path="/admin-home" component={AdminHome} />
			<Route path="/student-home" component={StudentHome} />
			<Route path="/registration" component={Registration} />
		</Router>
	);
};
export default App;
