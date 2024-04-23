import { type } from "os";

//TODO MOVE TO SERVICES
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

//TODO REMOVE THAT
export interface RootState {
	favorites: Array<ICountryData>;
}

//THIST SHOULD BE ONLY GLOBAL TYPES

// export type Nullable<T> = T | null