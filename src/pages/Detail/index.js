import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Card from "../../components/Card";
import { usePhotos } from "../../hooks/usePhotos";

const Detail = () => {
	const { id } = useParams();
	const { categoryPhotos, loading } = usePhotos();
	const [cardData, setCardData] = useState({});
	// Recuperar la card con el id del context

	useEffect(() => {
		//console.log(typeof id);
		//console.log(categoryPhotos, loading);

		if (!loading) {
			console.log(categoryPhotos);
			console.log("holis");
		}

		// if (!loading && categoryPhotos.length > 0) {
		// 	const bla = categoryPhotos.filter(item => {
		// 		console.log("id", typeof id);
		// 		console.log("item.id", typeof item.id);
		// 		console.log(item.id === Number(id));
		// 		return item.id === Number(id);
		// 	});

		// 	console.log(bla);
		// }
	}, [categoryPhotos, id, loading]);

	return (
		<div>
			<Card />
		</div>
	);
};

export default Detail;
