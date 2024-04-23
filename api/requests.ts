import axios from "axios";

//TODO move to env
//TODO move functions to services
//TODO add types to services
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
