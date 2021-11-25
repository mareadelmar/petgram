import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import LoginForm from "../../components/LoginForm";

const PublicRoute = () => {
	const { isAuth } = useContext(AuthContext);
	const loading = false; // request state

	console.log("PUBLIC ROUTE", isAuth);

	// pasarle a cada uno el handleSubmit
	return (
		<>
			<LoginForm title='Registrarse' disabled={loading} />
			<LoginForm title='Iniciar sesión' disabled={loading} />
		</>
	);
};

export default PublicRoute;
