import React from "react";
import { ImgWrapper, Img, Button } from "./styles";
import { MdFavoriteBorder } from "react-icons/md";

const DEFAULT_IMAGE =
	"https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

const Card = ({ likes = 0, id, src = DEFAULT_IMAGE }) => {
	return (
		<article>
			<a href={`/detail/${id}`}>
				<ImgWrapper>
					<Img src={src} alt='' />
				</ImgWrapper>
			</a>
			<Button type='button'>
				<MdFavoriteBorder size='32px' />
				{likes} likes
			</Button>
		</article>
	);
};

export default Card;
