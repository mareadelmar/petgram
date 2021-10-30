import React from "react";
import { Img, Anchor } from "./styles";

const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpeg";

const Category = ({ cover = DEFAULT_IMAGE, path, emoji = "?" }) => {
	return (
		<Anchor href={path}>
			<Img src={cover} alt='' />
			{emoji}
		</Anchor>
	);
};

export default Category;
