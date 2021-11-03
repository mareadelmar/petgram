import { useContext } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NavBar from "./components/NavBar";
import Favs from "./pages/Favs";
import User from "./pages/User";
import PublicRoute from "./pages/PublicRoute";
import AuthContext from "./context/AuthContext";
import PhotosContext from "./context/PhotosContext";
// const UserLogged = ({ children }) => {
// 	return children({ isAuth: false });
// };

function App() {
	const { isAuth } = useContext(AuthContext);
	const { photos } = useContext(PhotosContext);

	console.log(isAuth);
	return (
		<div className='App'>
			<GlobalStyle />
			<BrowserRouter>
				{photos.length}
				<Header />
				<Switch>
					<Route path='/detail/:id' component={Detail} />
					<Route path='/pets/:categoryId' component={Home} />
					<Route exact path='/' component={Home} />

					{isAuth ? (
						<Switch>
							<Route path='/favs' component={Favs} />
							<Route path='/user' component={User} />
						</Switch>
					) : (
						<Switch>
							<Route path='/favs' component={PublicRoute} />
							<Route path='/user' component={PublicRoute} />
						</Switch>
					)}

					{/* <Route path='/category/:id' /> */}
				</Switch>
				<NavBar />
			</BrowserRouter>
		</div>
	);
}

export default App;
