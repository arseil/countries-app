import { getCountries } from "@/api/requests";
import MultiActionAreaCard from "@/components/card/Card";
import ResponsiveGrid from "@/components/grid/Grid";
import { ICountryData } from "@/types";

export default async function Home() {
	const countries = await getCountries();

	return (
		<>
			<ResponsiveGrid>
				{countries.slice(0, 12).map((country: ICountryData, index: number) => (
					<MultiActionAreaCard key={index} country={country} />
				))}
			</ResponsiveGrid>
		</>
	);
}
