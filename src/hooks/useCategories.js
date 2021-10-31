import { useState, useEffect } from "react";

export const useCategories = () => {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetch("db.json")
			.then(res => res.json())
			.then(res => setCategories(res.categories));
	}, []);

	return { categories, loading };
};
