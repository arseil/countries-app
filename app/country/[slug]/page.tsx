"use client";

import { getCountry } from "@/api/requests";
import ActionAreaCard from "@/components/card/ActionAriaCard";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
	const params = useParams();
	const { slug } = params;

	const [country, setCountry] = useState(null);

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

	console.log(country);

	return <div className="flex justify-center p-20">{country && <ActionAreaCard country={country} />}</div>;
}
