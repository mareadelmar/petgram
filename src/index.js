import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import ApolloClient from "apollo-boost";
//import { ApolloProvider } from "react-apollo";
//import { ApolloProvider } from "@apollo/react-hooks";
//const cliente = new ApolloClient({});
import AuthContext from "./context/AuthContext";

ReactDOM.render(
	<React.StrictMode>
		<AuthContext.Provider>
			<App />
		</AuthContext.Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();

/*
DEPLOYAR API dsp para tocar graphql
*/
