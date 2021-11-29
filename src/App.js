import { useContext } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NavBar from "./components/NavBar";
import Favs from "./pages/Favs";
import User from "./pages/User";
import PublicRoute from "./pages/PublicRoute";
import AuthContext from "./context/AuthContext";
import NotFound from "./pages/NotFound";

// const UserLogged = ({ children }) => {
// 	return children({ isAuth: false });
// };

function App() {
	const { isAuth } = useContext(AuthContext);

	console.log(isAuth);
	return (
		<div className='App'>
			<GlobalStyle />
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path='/detail/:id' component={Detail} />
					<Route path='/pets/:categoryId' component={Home} />
					<Route exact path='/' component={Home} />
					{!isAuth && <Route path='/login' component={PublicRoute} />}
					{!isAuth && <Redirect from='/favs' to='/login' />}
					{!isAuth && <Redirect from='/user' to='/login' />}
					{isAuth && <Redirect from='/login' to='/' />}
					<Route path='/favs' component={Favs} />
					<Route path='/user' component={User} />
					<Route path='/:rest*' component={NotFound} />
				</Switch>
				<NavBar />
			</BrowserRouter>
		</div>
	);
}

export default App;
