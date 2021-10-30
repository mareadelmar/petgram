import { GlobalStyle } from "./styles/GlobalStyles";
import ListOfCategories from "./components/ListOfCategories";
import ListOfCards from "./components/ListOfCards";
import Logo from "./components/Logo";

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<Logo />
			<ListOfCategories />
			<ListOfCards />
		</div>
	);
}

export default App;
