import { useState, useEffect, useRef } from "react";

export const useNearScreen = () => {
	const [show, setShow] = useState(false);
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

	return [show, ref];
};
