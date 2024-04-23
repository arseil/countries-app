"use client";

import MultiActionAreaCard from "@/components/card/Card";
import { DataNotFound } from "@/components/dataNotFound/DataNotFound";
import ResponsiveGrid from "@/components/grid/Grid";
import { ICountryData } from "@/types";
import {RootState} from '@/store'
import { useSelector } from "react-redux";


//TODO: make server page and move this layout to coponents
export default function Home() {
	const { favorites } = useSelector((state: RootState) => state);
	
	if (!favorites.length) {
		return <div className="flex justify-center items-center flex-col min-h-[90vh]">
		<DataNotFound />
	</div>
	}

	return (
		<>
				<ResponsiveGrid>
					{favorites.map((country: ICountryData) => {
							return <MultiActionAreaCard key={country.population} country={country} />;
					})}
				</ResponsiveGrid>
		</>
	);
}
