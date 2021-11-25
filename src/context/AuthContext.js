import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(false);

	const value = {
		isAuth,
		activateAuth: token => {
			if (token) {
				setIsAuth(true);
			}
		},
	};

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
};

export default AuthContext;
