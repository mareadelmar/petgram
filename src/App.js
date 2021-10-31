import { GlobalStyle } from "./styles/GlobalStyles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<Header />
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Home} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
