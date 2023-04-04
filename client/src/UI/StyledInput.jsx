import React from "react";
import { colors } from "../constants";

export const StyledInput = ({
	width,
	height,
	placeholder,
	type = "text",
	required = false,
	error,
	onChange,
}) => {
	return (
		<input
			required={required}
			placeholder={placeholder}
			type={type}
			style={{
				width: width,
				height: height,
				borderRadius: "1em",
				border: `0.05em solid ${
					error ? colors["errorClr"] : colors["inputBorderClr"]
				}`,
				boxShadow: error ? "0 1em 2em rgba(223, 105, 81, 0.3)" : "none",
				backgroundColor: colors["inputClr"],
				fontStyle: "italic",
				padding: "0 1em",
				margin: "0.5em 0",
			}}
			onChange={onChange}
		/>
	);
};
