import { useState, createContext } from "react";

const PhotosContext = createContext({});

export const PhotosContextProvider = ({ children }) => {
	const [photos, setPhotos] = useState([]);

	return (
		<PhotosContext.Provider value={{ photos, setPhotos }}>
			{children}
		</PhotosContext.Provider>
	);
};

export default PhotosContext;
