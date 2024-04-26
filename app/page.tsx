import MaterialCard from "@/components/Card/MaterialCard";
import { DataNotFound } from "@/components/DataNotFound/DataNotFound";
import ResponsiveGrid from "@/components/Grid/Grid";
import { CountryService, ICountryData } from "@/services";

export default async function Home() {
	const countries = await CountryService.getCountries();

	//TODO: handle errros

	if (!countries) {
		return <DataNotFound />;
	}

	//TODO: move to separate components

	return (
		<>
			<ResponsiveGrid>
				{countries.slice(0, 24).map((country: ICountryData) => (
					<MaterialCard key={country.population} sx={{ py: 2, px: 2 }} country={country} />
				))}
			</ResponsiveGrid>
		</>
	);
}
