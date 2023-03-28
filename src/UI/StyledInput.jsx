import React, { useState } from "react";
import { sizes, fontFamilies, colors, weights } from "../constants";

export const StyledInput = ({
	width,
	height,
	placeholder,
	type = "text",
	required = false,
	regex = "",
	value,
	onChange,
}) => {
	const [error, setError] = useState(false);

	const handleError = () =>
		!(required && regex.test(value)) ? setError(true) : setError(false);

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
