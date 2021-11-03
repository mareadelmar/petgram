import { useState, useEffect, useContext } from "react";
import PhotosContext from "../context/PhotosContext";

export const usePhotos = () => {
	const { photos, setPhotos } = useContext(PhotosContext);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch("db.json")
			.then(res => res.json())
			.then(data => {
				setPhotos(data.photos);
			})
			.catch(err => console.error(err))
			.finally(() => setLoading(false));
	}, [setPhotos]);

	return { photos, loading };
};
