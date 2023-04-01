import React from "react";
import { sizes, fontFamilies, colors, weights } from "../constants";

export const StyledText = ({ children,size, weight, family, color }) => {
	return (
		<span
			style={{
				fontSize: sizes[size],
				fontFamily: fontFamilies[family],
				color: colors[color],
				fontWeight: weights[weight],
			}}
		>
			{children}
		</span>
	);
};
