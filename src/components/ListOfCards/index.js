import React, { useState, useEffect } from "react";
import Card from "../Card";
import { usePhotos } from "../../hooks/usePhotos";

const ListOfCards = ({ categoryId }) => {
	const { photos } = usePhotos();
	const [filterPhotos, setFilterPhotos] = useState(photos);
	console.log(photos);

	useEffect(() => {
		if (categoryId) {
			const filterPhotos = photos.filter(item => {
				return item.categoryId === Number(categoryId);
			});
			setFilterPhotos(filterPhotos);
		} else {
			setFilterPhotos(photos);
		}
	}, [categoryId, photos]);

	return (
		<ul>
			{filterPhotos.map(item => {
				return <Card key={item.id} {...item} />;
			})}
		</ul>
	);
};

export default ListOfCards;
