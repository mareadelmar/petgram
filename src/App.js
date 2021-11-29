import React, { useContext, Suspense } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import PublicRoute from "./pages/PublicRoute";
import AuthContext from "./context/AuthContext";
import NotFound from "./pages/NotFound";

const Detail = React.lazy(() => import("./pages/Detail"));
const Favs = React.lazy(() => import("./pages/Favs"));
const User = React.lazy(() => import("./pages/User"));

function App() {
	const { isAuth } = useContext(AuthContext);

	console.log(isAuth);
	return (
		<Suspense fallback={() => <div />}>
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
					<Route component={NotFound} />
				</Switch>
				<NavBar />
			</BrowserRouter>
		</Suspense>
	);
}

export default App;
