import React, { useState, useEffect } from "react";
import Category from "../Category";
import { List, ListItem } from "./styles";
import { useCategories } from "../../hooks/useCategories";

const ListOfCategories = ({ categoryId }) => {
	console.log(categoryId);
	const [showFixed, setShowFixed] = useState(false);
	const { categories, loading } = useCategories();

	useEffect(() => {
		const onScroll = e => {
			// recibe el evento del scroll
			const newShowFixed = window.scrollY > 200;
			showFixed !== newShowFixed && setShowFixed(newShowFixed);
		};

		document.addEventListener("scroll", onScroll);

		return () => {
			// limpia el evento
			document.removeEventListener("scroll", onScroll);
		};
	}, [showFixed]);

	// useEffect(() => {
	// 	if (categoryName) {
	// 	}
	// }, [categoryName]);

	const renderList = fixed => (
		<List fixed={fixed}>
			{loading ? (
				<ListItem key='loading'>
					<Category />
				</ListItem>
			) : (
				categories.map(item => (
					<ListItem key={item.id}>
						<Category {...item} />
					</ListItem>
				))
			)}
		</List>
	);

	return (
		<>
			{renderList()}
			{showFixed && renderList(true)}
		</>
	);
};

export default ListOfCategories;
