import React from "react";
import { Img, Link } from "./styles";

const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpeg";

const Category = ({ cover = DEFAULT_IMAGE, name, id, emoji = "?" }) => {
	return (
		<Link to={`/pets/${id}`}>
			<Img src={cover} alt='' />
			{emoji}
		</Link>
	);
};

export default Category;
