import React from "react";

const TextSize = {
	h1: "4em",
	h2: "3.5em",
	h3: "3em",
	h4: "2.5em",
	h5: "2em",
	h6: "1.5em",
	p: "0.9em",
};

const FontFamilies = {
	preHeading: ["Yellowtail", "cursive"],
	heading: ["Roboto", "sans-serif"],
	paragraph: ["OpenSans", "sans-serif"],
};

const FontColors = {
	green: "#68a47f",
	darkBlue: "#274c5b",
	white: "#fff",
};

export const StyledText = ({ size, children, weight, text, color }) => {
	return (
		<span
			//className={className}
			style={{
				fontSize: TextSize[size],
				fontFamily: FontFamilies[text],
				fontWeight: weight,
				color: FontColors[color],
			}}
		>
			{children}
		</span>
	);
};
