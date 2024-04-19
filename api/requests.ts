import axios from "axios";

const RESTCOUNTRIES_API_URL = "https://restcountries.com/v3.1";

export const getCountries = async () => {
	try {
		const res = await axios.get(`${RESTCOUNTRIES_API_URL}/all?fields=name,flags,capital,population`);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

export const getCountry = async (name: string) => {
	try {
		const res = await axios.get(`${RESTCOUNTRIES_API_URL}/name/${name}?fields=name,flags,capital,population`);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};
