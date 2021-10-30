import axios from "axios";

const API_KEY = "05e2e0eb-14b3-4564-ab40-ef2683bab749";

export const getGifs = () => {
	const url = `https://thecatapi.com/v1/images?api_key=${API_KEY}`;
	//const url = "https://thecatapi.com/v1/images";

	const config = {
		"Content-Type": "application/json",
		"x-api-key": API_KEY,
	};

	return axios.get(url).then(res => console.log(res));
};
