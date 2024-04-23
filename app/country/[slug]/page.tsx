"use client";

import { getCountry } from "@/api/requests";
import ActionAreaCard from "@/components/card/ActionAriaCard";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

//TODO MAKE REQUEST ON SERVER

interface HomeProps{
	params: {
		slug: string
	}
}

//TODO add to props pagge { params }: HomeProps

export default async function Home() {
	const params = useParams()
	const { slug } = params;
	// const country = await getCountry(params.slug);

	const [country, setCountry] = useState(null);

	//TODO If country is empty add error handling

	useEffect(() => {
		const fetchCountry = async () => {
			const result = await getCountry(slug as string);
			setCountry(result[0]);
		};

		fetchCountry();
	}, [slug]);

	if (!country) {
		return null;
	}

	return <div className="flex justify-center p-20">{country && <ActionAreaCard country={country} />}</div>;
}
