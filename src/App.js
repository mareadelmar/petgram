import { GlobalStyle } from "./styles/GlobalStyles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/detail/:id' component={Detail} />
					<Route path='/pets/:categoryId' component={Home} />
					{/* <Route path='/category/:id' /> */}
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
