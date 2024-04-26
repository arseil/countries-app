import axios from "axios";

export const baseUrl = process.env.RESTCOUNTRIES_API_URL;

export class CountryService {
	static async getCountries() {
		try {
			const res = await axios.get(`${baseUrl}/all?fields=name,flags,capital,population`);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	}

	static async getCountry(name: string) {
		try {
			const res = await axios.get(`${baseUrl}/name/${name}?fields=name,flags,capital,population`);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	}
}
