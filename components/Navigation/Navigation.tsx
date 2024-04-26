import { Badge, Box, Button } from "@mui/material";
import { usePathname } from "next/navigation";

interface INavigationProps {
	handleCloseNavMenu: () => void;
	favoritesLength: number;
}

export const Navigation = ({ handleCloseNavMenu, favoritesLength }: INavigationProps) => {
	const pathname = usePathname();

	return (
		<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "flex-end" }}>
			<Button
				onClick={handleCloseNavMenu}
				href="/"
				sx={{
					my: 2,
					color: "white",
					display: "block",
					textDecoration: pathname === "/" ? "underline" : "none",
				}}
			>
				Home
			</Button>
			<Button
				onClick={handleCloseNavMenu}
				href="/favorites"
				sx={{
					my: 2,
					color: "white",
					display: "block",
				}}
			>
				<Badge
					badgeContent={favoritesLength || ""}
					color={favoritesLength > 0 ? "secondary" : "default"}
					sx={{ textDecoration: pathname === "/favorites" ? "underline" : "none" }}
				>
					Favorites
				</Badge>
			</Button>
		</Box>
	);
};
