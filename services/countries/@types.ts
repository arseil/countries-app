export interface ICountryData {
	name: {
		official: string;
		common: string;
	};
	capital: string;
	population: number;
	flags: {
		svg: string;
	};
}
