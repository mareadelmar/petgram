import { GlobalStyle } from "./GlobalStyles";
import ListOfCategories from "./components/ListOfCategories";
import ListOfCards from "./components/ListOfCards";
import Logo from "./components/Logo";

function App() {
	return (
		<div className='App'>
			<Logo />
			<GlobalStyle />
			<ListOfCategories />
			<ListOfCards />
		</div>
	);
}

export default App;
