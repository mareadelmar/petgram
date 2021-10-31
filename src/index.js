import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import ApolloClient from "apollo-boost";
//import { ApolloProvider } from "react-apollo";
//import { ApolloProvider } from "@apollo/react-hooks";
//const cliente = new ApolloClient({});

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();

/*
DEPLOYAR API dsp para tocar graphql
*/
