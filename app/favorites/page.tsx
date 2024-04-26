"use client";
import { DataNotFound } from "@/components/DataNotFound/DataNotFound";
import ResponsiveGrid from "@/components/Grid/Grid";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import MaterialCard from "@/components/Card/MaterialCard";
import { ICountryData } from "@/services";

//TODO: make server page and move this layout to coponents
export default function Home() {
	const favorites = useSelector((state: RootState) => state.favorites.favorites);

	if (!favorites.length) {
		return <DataNotFound />;
	}

	return (
		<>
			<ResponsiveGrid>
				{favorites.map((country: ICountryData) => {
					return <MaterialCard key={country.population} sx={{ py: 2, px: 2 }} country={country} />;
				})}
			</ResponsiveGrid>
		</>
	);
}
