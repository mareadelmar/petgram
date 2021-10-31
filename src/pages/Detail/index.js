import React from "react";
import { useParams } from "react-router";
import Card from "../../components/Card";

const Detail = () => {
	const id = useParams();
	// Recuperar la card con el id del context
	return (
		<div>
			{id}
			<Card />
		</div>
	);
};

export default Detail;
