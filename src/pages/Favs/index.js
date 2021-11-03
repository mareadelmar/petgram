import React, { useState, useEffect } from "react";
import { usePhotos } from "../../hooks/usePhotos";
import Card from "../../components/Card";

const Favs = () => {
	const { photos } = usePhotos();
	const [storedLikes, setStoredLikes] = useState([]);

	useEffect(() => {
		if (photos.length > 0) {
			let likeList = photos.filter(item => {
				const key = `like-${item.id}`;
				try {
					let storedItem = JSON.parse(localStorage.getItem(key));
					if (storedItem) {
						return item;
					}
				} catch (err) {
					console.error(err);
				}
			});
			setStoredLikes(likeList);
		}
	}, [photos]);

	return (
		<div>
			<h3>Tus favoritos</h3>
			{storedLikes.length > 0 ? (
				storedLikes.map(item => {
					return <Card key={item.id} {...item} />;
				})
			) : (
				<p>Aún no tienes fotos favoritas</p>
			)}
		</div>
	);
};

export default Favs;
