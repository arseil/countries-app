import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import { actions } from "@/store/favorites/favorites";
import { ICountryData } from "@/services";

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
			//TODO: add to favtites
			dispatch(actions.addFavorites(country));
		} else {
			//TODO: remove favvorites
			dispatch(actions.removeFavorites(country));
		}
	};

	//TODO remove button

	return (
		<Checkbox
			{...label}
			onChange={handleChange}
			icon={<FavoriteBorder />}
			checkedIcon={<Favorite />}
			checked={hasCountry}
		/>
	);
}
