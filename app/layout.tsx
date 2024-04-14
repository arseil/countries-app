import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveAppBar from "@/components/appBar/AppBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Countries",
	description: "Countries App",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ResponsiveAppBar />
				{children}
			</body>
		</html>
	);
}
