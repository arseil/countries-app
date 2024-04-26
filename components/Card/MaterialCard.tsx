"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, SxProps } from "@mui/material";
import FavoriteCheckbox from "../FavoriteCheckbox/FavoriteCheckbox";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { ICountryData } from "@/services";

interface IMaterialCardProps {
	sx: SxProps;
	country: ICountryData;
}

export default function MaterialCard({ sx, country }: IMaterialCardProps) {
	const favorites = useSelector((state: RootState) => state.favorites.favorites);
	const hasCountry = favorites.some((favorite: ICountryData) => favorite?.population === country?.population);
	const name = country?.name.common.toLowerCase();

	return (
		<Card sx={sx}>
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
