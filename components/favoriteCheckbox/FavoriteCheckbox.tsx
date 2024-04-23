import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "@/store/favorites/favorites.slice";
import { ICountryData } from "@/types";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function FavoriteCheckbox({
	country,
	hasCountry,
}: {
	country: ICountryData;
	hasCountry: boolean;
}) {
	const dispatch = useDispatch();
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const checked = e.target.checked;
		if (checked) {
			//TODO: removve favvorites
		}else {
			//TODO: add to favtites
		}
		console.log(e);
		
	}

	//TODO remove button
	
	return (
		<button onClick={() => dispatch(actions.toggleFavorites(country))}>
			<Checkbox {...label} onChange={handleChange} icon={<FavoriteBorder />} checkedIcon={<Favorite />} checked={hasCountry} />
		</button>
	);
}
