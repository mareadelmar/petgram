import { useState } from "react";

export const useLocalStorage = (initialValue, key) => {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			let item = localStorage.getItem(key);
			return item !== null ? JSON.parse(item) : initialValue;
		} catch (err) {
			return initialValue;
		}
	});

	const setLocalStorage = value => {
		try {
			window.localStorage.setItem(key, JSON.stringify(value)); // asegurarse que es un string
			setStoredValue(value);
		} catch (err) {
			console.error(err);
		}
	};

	return [storedValue, setLocalStorage];
};
