import React from "react";
const ADMIN_LOGIN = "Registration";
const AdminLogin = () => {
	return (
		<div className="adminLoginContainer">
			<h1 className="header">{ADMIN_LOGIN}</h1>
			<form
				method="POST"
				action="/registration"
				className="loginForm"
				autoComplete="off"
			>
				<input type="text" name="id" placeholder="username" required />
				<input
					type="password"
					name="password"
					placeholder="password"
					minLength="8"
					required
				/>
				<input type="submit" value="Register" />
			</form>
		</div>
	);
};
export default AdminLogin;
