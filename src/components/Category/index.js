import React from "react";
import { Img, Link } from "./styles";

const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpeg";

const Category = ({ cover = DEFAULT_IMAGE, path, emoji = "?" }) => {
	return (
		<Link to={path}>
			<Img src={cover} alt='' />
			{emoji}
		</Link>
	);
};

export default Category;
