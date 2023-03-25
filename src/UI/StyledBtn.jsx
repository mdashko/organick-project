import React from "react";
import { fontFamilies, colors, widthes } from "../constants";

export const StyledBtn = ({ children, textClr, bgClr, borderClr, width }) => {
	return (
		<button
			style={{
				margin: "2.5em 0",
				width: widthes[width],
				height: "4em",
				border: `1em solid ${colors[borderClr]}`,
				borderRadius: "1em",
				backgroundColor: colors[bgClr],
				color: colors[textClr],
				fontFamily: fontFamilies["buttons"],
			}}
		>
			{" "}
			{children}
		</button>
	);
};
