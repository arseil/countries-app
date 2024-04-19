"use client";

import MultiActionAreaCard, { ICountryData } from "@/components/card/Card";
import { DataNotFound } from "@/components/dataNotFound/DataNotFound";
import ResponsiveGrid from "@/components/grid/Grid";
import { useSelector } from "react-redux";

export default function Home() {
	const { favorites } = useSelector((state) => state);

	return (
		<>
			{favorites[0] === null && favorites.length === 1 && (
				<div className="flex justify-center items-center flex-col min-h-[90vh]">
					<DataNotFound />
				</div>
			)}
			{favorites.length > 1 && (
				<ResponsiveGrid>
					{favorites.slice(0, 12).map((country: ICountryData, index: number) => {
						if (country !== null) {
							return <MultiActionAreaCard key={index} country={country} />;
						}
					})}
				</ResponsiveGrid>
			)}
		</>
	);
}
