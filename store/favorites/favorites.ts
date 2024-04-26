import { ICountryData } from "@/services";
import { createSlice } from "@reduxjs/toolkit";

//TODO make as object with key favorites
const initialState = {
	favorites: [] as ICountryData[],
};

//TODO: add two separates meethods remove and add
export const favoritesSlice = createSlice({
	name: "favorites",
	initialState,
	reducers: {
		addFavorites: (state, action) => {
			const country = action.payload;
			state.favorites.push(country);
		},
		removeFavorites: (state, action) => {
			const country = action.payload;
			const isExists = state.favorites.some((c) => c?.population === country.population);
			if (isExists) {
				const index = state.favorites.findIndex((item) => item?.population === country.population);
				if (index !== -1) {
					state.favorites.splice(index, 1);
				}
			}
		},
	},
});

export const { actions, reducer } = favoritesSlice;
