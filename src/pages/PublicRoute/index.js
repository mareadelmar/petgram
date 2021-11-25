import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import LoginForm from "../../components/LoginForm";

const PublicRoute = () => {
	const { isAuth, activateAuth } = useContext(AuthContext);

	// simulación de inicio de sesión
	const loading = false; // request state

	console.log("PUBLIC ROUTE", isAuth);

	const handleSubmit = e => {
		e.preventDefault();
		const token = true;
		activateAuth(token);
	};

	return (
		<>
			<LoginForm
				title='Registrarse'
				disabled={loading}
				handleSubmit={handleSubmit}
			/>
			<LoginForm
				title='Iniciar sesión'
				disabled={loading}
				handleSubmit={handleSubmit}
			/>
		</>
	);
};

export default PublicRoute;
