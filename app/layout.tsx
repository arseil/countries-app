"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveAppBar from "@/components/appBar/AppBar";
import { Provider } from "react-redux";
import store, { persistor } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<ResponsiveAppBar />
						{children}
					</PersistGate>
				</Provider>
			</body>
		</html>
	);
}
