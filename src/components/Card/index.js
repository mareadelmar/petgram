import React from "react";
import { Article, ImgWrapper, Img, Button } from "./styles";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";

const DEFAULT_IMAGE =
	"https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

const Card = ({ likes = 0, id, src = DEFAULT_IMAGE }) => {
	const key = `like-${id}`;
	const [show, ref] = useNearScreen();

	// sería mejor llamarlo [liked, setLiked], pero así es más claro
	const [storedValue, setLocalStorage] = useLocalStorage(false, key);

	const Icon = storedValue ? MdFavorite : MdFavoriteBorder;

	return (
		<Article ref={ref}>
			{show && (
				<>
					<a href={`/detail/${id}`}>
						<ImgWrapper>
							<Img src={src} alt='' />
						</ImgWrapper>
					</a>
					<Button
						type='button'
						onClick={() => setLocalStorage(!storedValue)}
					>
						<Icon size='32px' />
						{likes} likes
					</Button>
				</>
			)}
		</Article>
	);
};

export default Card;
