import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import FavoriteCheckbox from "../favoriteCheckbox/FavoriteCheckbox";

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

export default function MultiActionAreaCard(props: { country: ICountryData }) {
	const { country } = props;
	const name = country.name.common.toLowerCase();

	return (
		<Card sx={{ py: 2, px: 2 }}>
			<FavoriteCheckbox />
			<CardActionArea href={`/country/${name}`}>
				<CardMedia component="img" height="140" image={`${country.flags.svg}`} alt="green iguana" />
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{country.name.official}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Capital: {country.capital}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Population: {country.population}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
