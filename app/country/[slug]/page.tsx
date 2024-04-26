import MaterialCard from "@/components/Card/MaterialCard";
import { DataNotFound } from "@/components/DataNotFound/DataNotFound";
import { CountryService } from "@/services";

//TODO MAKE REQUEST ON SERVER

interface HomeProps {
	params: {
		slug: string;
	};
}

//TODO add to props pagge { params }: HomeProps

export default async function Home({ params }: HomeProps) {
	const { slug } = params;
	const country = await CountryService.getCountry(slug);

	//TODO If country is empty add error handling

	if (!country) {
		return <DataNotFound />;
	}

	return (
		<div className="flex justify-center p-20">
			{country && (
				<MaterialCard key={country.population} sx={{ maxWidth: "50%", px: 3, py: 1 }} country={country[0]} />
			)}
		</div>
	);
}
