import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthContextProvider } from "./context/AuthContext";
import { PhotosContextProvider } from "./context/PhotosContext";

ReactDOM.render(
	<React.StrictMode>
		<AuthContextProvider>
			<PhotosContextProvider>
				<App />
			</PhotosContextProvider>
		</AuthContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();

/*
DEPLOYAR API dsp para tocar graphql
*/
