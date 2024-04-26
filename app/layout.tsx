import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveAppBar from "@/components/AppBar/AppBar";
import { Providers } from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					<ResponsiveAppBar />
					{children}
				</Providers>
			</body>
		</html>
	);
}
