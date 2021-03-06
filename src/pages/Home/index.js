import React from "react";
import ListOfCategories from "../../components/ListOfCategories";
import ListOfCards from "../../components/ListOfCards";
import { useParams } from "react-router";

const Home = () => {
	const { categoryId } = useParams();
	return (
		<>
			<ListOfCategories />
			<ListOfCards categoryId={categoryId} />
		</>
	);
};

export default Home;
