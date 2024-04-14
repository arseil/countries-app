import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { getCountry } from "@/api/requests";
import FavoriteCheckbox from "../favoriteCheckbox/FavoriteCheckbox";
import { ICountryData } from "./Card";

export default function ActionAreaCard({ country }: { country: ICountryData }) {
	console.log(country);

	return (
		<Card sx={{ maxWidth: "50%", px: 3, py: 1 }}>
			<FavoriteCheckbox />
			<CardActionArea disabled>
				<CardMedia component="img" height="140" image={`${country.flags.svg}`} alt="" />
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{country.name.common}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{country.capital}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{country.population}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
