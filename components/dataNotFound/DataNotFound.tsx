import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Typography } from "@mui/material";

export const DataNotFound = () => {
	return (
		<div className="flex justify-center items-center flex-col min-h-[90vh]">
			<div className="flex justify-center items-center flex-col ">
				<SentimentVeryDissatisfiedIcon sx={{ fontSize: 100 }} />
				<Typography
					variant="h5"
					noWrap
					sx={{
						mt: 2,
						flexGrow: 1,
						fontFamily: "monospace",
						fontWeight: 500,
						letterSpacing: ".3rem",
						color: "inherit",
						textDecoration: "none",
					}}
				>
					Data Not Found
				</Typography>
			</div>
		</div>
	);
};
