import React from "react";

const STUDENT_LOGIN = "Student Login";

const StudentLogin = () => {
	return (
		<div className="adminLoginContainer">
			<h1 className="header">{STUDENT_LOGIN}</h1>
			<form
				method="POST"
				action="/student-login"
				autoComplete="off"
				className="loginForm"
			>
				<input type="text" name="id" placeholder="username" required />
				<input
					type="password"
					name="password"
					placeholder="password"
					minLength="8"
					required
				/>
				<input type="submit" value="Login" />
			</form>
		</div>
	);
};

export default StudentLogin;
