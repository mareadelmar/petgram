import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(() => {
		return window.sessionStorage.getItem("token");
	});

	const value = {
		isAuth,
		activateAuth: token => {
			if (token) {
				setIsAuth(true);
				window.sessionStorage.setItem("token", token);
			}
		},
	};

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
};

export default AuthContext;

/**
 * export default {
 * 	Provider,
 * 	Consumer: Context.Consumer
 * }
 */
