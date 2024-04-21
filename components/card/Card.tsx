"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import FavoriteCheckbox from "../favoriteCheckbox/FavoriteCheckbox";
import { useSelector } from "react-redux";
import { ICountryData, RootState } from "@/types";

export default function MultiActionAreaCard(props: { country: ICountryData }) {
	const { country } = props;
	const name = country?.name.common.toLowerCase();
	const { favorites } = useSelector((state: RootState) => state);
	const hasCountry = favorites.some((favorite) => favorite?.population === country?.population);

	return (
		<Card sx={{ py: 2, px: 2 }}>
			<FavoriteCheckbox country={country} hasCountry={hasCountry} />
			<CardActionArea href={`/country/${name}`}>
				<CardMedia component="img" height="140" image={`${country?.flags.svg}`} alt="green iguana" />
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{country?.name.official}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Capital: {country?.capital}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Population: {country?.population}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
