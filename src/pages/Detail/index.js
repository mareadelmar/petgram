import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Card from "../../components/Card";
import { usePhotos } from "../../hooks/usePhotos";
import { Container } from "./styles";

const Detail = () => {
	const { id } = useParams();
	const [cardData, setCardData] = useState({});
	const { photos } = usePhotos();
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		if (photos) {
			const data = photos.find(item => item.id === Number(id));
			setCardData(data);
			setLoader(false);
		}
	}, [id, photos]);

	if (loader) return <p>Cargando...</p>;
	return (
		<Container>
			<Card {...cardData} />
		</Container>
	);
};

export default Detail;
