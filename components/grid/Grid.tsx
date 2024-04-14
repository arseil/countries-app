import React from "react";

interface GridProps {
	children: React.ReactNode;
}

const ResponsiveGrid: React.FC<GridProps> = ({ children }) => {
	return (
		<div
			style={{
				padding: "2rem 2rem",
				display: "grid",
				gridTemplateColumns: "repeat(3, 1fr)",
				gridAutoFlow: "row",
				gap: "2rem",
			}}
		>
			{children}
		</div>
	);
};

export default ResponsiveGrid;
