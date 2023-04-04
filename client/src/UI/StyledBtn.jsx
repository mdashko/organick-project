import React from "react";
import { fontFamilies, colors } from "../constants";
import { images } from "../images";

export const StyledBtn = ({
	textColor,
	bgColor,
	borderColor,
	width = "12.5em",
	height = "4em",
	aerrow = true,
	children,
	onClick,
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
				position: "relative",
			}}
			onClick={onClick}
		>
			{children}{" "}
			<img
				src={aerrow && images.aerrow}
				style={{ position: "absolute", bottom: "30%", right: "10%" }}
			/>
		</button>
	);
};
