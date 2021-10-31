import { useState, useEffect } from "react";

export const usePhotos = () => {
	const [categoryPhotos, setCategoryPhotos] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetch("db.json")
			.then(res => res.json())
			.then(data => setCategoryPhotos(data.photos));
	}, []);

	return { categoryPhotos };
};
