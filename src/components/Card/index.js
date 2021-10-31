import React, { useState, useEffect, useRef } from "react";
import { Article, ImgWrapper, Img, Button } from "./styles";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const DEFAULT_IMAGE =
	"https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

const Card = ({ likes = 0, id, src = DEFAULT_IMAGE }) => {
	const [show, setShow] = useState(false);
	const key = `like-${id}`;

	// sería mejor llamarlo [liked, setLiked], pero así es más claro
	const [storedValue, setLocalStorage] = useLocalStorage(false, key);

	const ref = useRef(null);

	useEffect(() => {
		const observer = new window.IntersectionObserver(entries => {
			// propiedad para saber si está en el viewport
			const { isIntersecting } = entries[0];
			if (isIntersecting) {
				setShow(true);
				// desconecta el observer cuando el elemento está visible
				observer.disconnect();
			}
		});

		// inicialización del observer: recibe el elemento
		observer.observe(ref.current);
	}, [ref]);

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
