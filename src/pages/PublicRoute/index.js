import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import LoginForm from "../../components/LoginForm";

const PublicRoute = () => {
	const { isAuth } = useContext(AuthContext);
	console.log("PUBLIC ROUTE", isAuth);

	// pasarle a cada uno el handleSubmit
	return (
		<>
			<LoginForm title='Registrarse' />
			<LoginForm title='Iniciar sesión' />
		</>
	);
};

export default PublicRoute;
