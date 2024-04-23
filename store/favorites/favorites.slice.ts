import { ICountryData } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

//TODO make as object with key favorites
const initialState: Array<ICountryData> = [];


//TODO: add two separates meethods remove and add
export const favoritesSlice = createSlice({
	name: "favorites",
	initialState,
	reducers: {
		toggleFavorites: (state, action) => {
			const country = action.payload;
			const isExists = state.some((c) => c?.population === country.population);
			if (isExists) {
				const index = state.findIndex((item) => item?.population === country.population);
				if (index !== -1) {
					state.splice(index, 1);
				}
			} else {
				state.push(country);
			}
		},
	},
});

export const { actions, reducer } = favoritesSlice;
