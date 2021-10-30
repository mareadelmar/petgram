import React, { useState, useEffect } from "react";
import Category from "../Category";
import { List, ListItem } from "./styles";
//import { categories } from "../../../api/db.json";

const ListOfCategories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch("db.json")
			.then(res => res.json())
			.then(res => setCategories(res.categories));
	}, []);

	return (
		<List>
			{categories.map(item => (
				<ListItem key={item.id}>
					<Category {...item} />
				</ListItem>
			))}
		</List>
	);
};

export default ListOfCategories;
