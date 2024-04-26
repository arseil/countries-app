"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import ExploreIcon from "@mui/icons-material/Explore";
import { useSelector } from "react-redux";
import Link from "next/link";
import { Navigation } from "../Navigation/Navigation";
import { RootState } from "@/store";

const pages = ["Home", "Favorites"];

//TODO move to layouts

function ResponsiveAppBar() {
	const favorites = useSelector((state: RootState) => state.favorites.favorites);
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	//TODO add next link
	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<ExploreIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
					<Typography
						variant="h6"
						noWrap
						component={Link}
						href="/"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						COUNTRIES
					</Typography>
					{/* //TODO: ADD separate component */}
					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<ExploreIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
					<Typography
						variant="h5"
						noWrap
						component={Link}
						href="#app-bar-with-responsive-menu"
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						COUNTRIES
					</Typography>

					{/* //TODO: make navigatin component  */}
					{/* //TODO: make underline on current page */}
					<Navigation handleCloseNavMenu={handleCloseNavMenu} favoritesLength={favorites.length} />
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default ResponsiveAppBar;
