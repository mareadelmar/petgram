import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Card from "../../components/Card";
import { usePhotos } from "../../hooks/usePhotos";
import { Container } from "./styles";

const Detail = () => {
	const { id } = useParams();
	//const { categoryPhotos, loading } = usePhotos();
	//const [cardData, setCardData] = useState({});
	// Recuperar la card con el id del context
	const { photos } = usePhotos();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		//console.log(typeof id);
		//console.log(categoryPhotos, loading);

		if (photos) {
			console.log(photos);
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
	}, [id, photos]);

	//if (showLoader) return <p>Cargando...</p>;
	return (
		<Container>
			<Card />
		</Container>
	);
};

export default Detail;
