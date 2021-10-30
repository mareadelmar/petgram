import React, { useState, useEffect } from "react";
import Card from "../Card";
//import { getGifs } from "../../services/getGifs";

const ListOfCards = () => {
	const [photos, setPhotos] = useState([]);

	useEffect(() => {
		// getGifs()
		// 	.then(res => console.log(res))
		// 	.catch(err => console.error(err));

		fetch("db.json")
			.then(res => res.json())
			.then(data => setPhotos(data.photos));
	}, []);

	return (
		<ul>
			{photos.map(item => {
				return <Card key={item} {...item} />;
			})}
		</ul>
	);
};

export default ListOfCards;
