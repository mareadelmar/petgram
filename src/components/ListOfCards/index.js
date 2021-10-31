import React, { useState, useEffect } from "react";
import Card from "../Card";
import { usePhotos } from "../../hooks/usePhotos";

const ListOfCards = ({ categoryId }) => {
	const { categoryPhotos } = usePhotos();
	const [photos, setPhotos] = useState(categoryPhotos);
	console.log(photos, categoryPhotos);

	useEffect(() => {
		if (categoryId) {
			const filterPhotos = categoryPhotos.filter(item => {
				return item.categoryId === Number(categoryId);
			});
			setPhotos(filterPhotos);
		} else {
			setPhotos(categoryPhotos);
		}
	}, [categoryId, categoryPhotos]);

	return (
		<ul>
			{photos.map(item => {
				return <Card key={item.id} {...item} />;
			})}
		</ul>
	);
};

export default ListOfCards;
