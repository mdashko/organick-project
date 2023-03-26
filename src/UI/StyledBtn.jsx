import React from "react";
import { fontFamilies, colors } from "../constants";

export const StyledBtn = ({
	textColor,
	bgColor,
	borderColor,
	width = "12.5em",
	height = "4em",
	children,
}) => {
	return (
		<button
			style={{
				width: width,
				height: height,
				border: `1px solid ${colors[borderColor]}`,
				borderRadius: "1em",
				backgroundColor: colors[bgColor],
				color: colors[textColor],
				fontFamily: fontFamilies["buttons"],
			}}
		>
			{" "}
			{children}
		</button>
	);
};
