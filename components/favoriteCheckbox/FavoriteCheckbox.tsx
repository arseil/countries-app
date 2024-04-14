import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function FavoriteCheckbox() {
	return (
		<div className="flex justify-end">
			<Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
		</div>
	);
}