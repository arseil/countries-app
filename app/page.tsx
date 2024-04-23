import { getCountries } from "@/api/requests";
import MultiActionAreaCard from "@/components/card/Card";
import ResponsiveGrid from "@/components/grid/Grid";
import { ICountryData } from "@/types";

export default async function Home() {
	const countries = await getCountries();

	//TODO: handle errros
				//TODO: move to separate components

	return (
		<>
			<ResponsiveGrid>
				{countries.slice(0, 24).map((country: ICountryData,) => (
					<MultiActionAreaCard key={country.population} country={country} />
				))}
			</ResponsiveGrid>
		</>
	);
}
