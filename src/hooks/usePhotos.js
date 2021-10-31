import { useState, useEffect } from "react";

export const usePhotos = () => {
	const [categoryPhotos, setCategoryPhotos] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch("db.json")
			.then(res => res.json())
			.then(data => setCategoryPhotos(data.photos))
			.catch(err => console.error(err))
			.finally(() => setLoading(false));
	}, []);

	console.log(categoryPhotos);
	return { categoryPhotos, loading };
};
