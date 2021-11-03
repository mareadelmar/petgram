import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import LoginForm from "../../components/LoginForm";

const PublicRoute = () => {
	const { isAuth } = useContext(AuthContext);
	console.log("PUBLIC ROUTE", isAuth);
	return (
		<div>
			not register user
			<LoginForm />
		</div>
	);
};

export default PublicRoute;
