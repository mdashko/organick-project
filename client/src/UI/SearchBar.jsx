import React from "react";
import { colors } from "../constants";
import { images } from "../images";

export const SearchBar = () => {
	return (
		<div style={{ position: "relative", margin: "0 0.5em" }}>
			<input
				style={{
					borderRadius: "2.5em",
					border: "none",
					backgroundColor: colors["headerInputClr"],
					width: "15em",
					height: "3.5em",
					position: "relative",
				}}
				type="text"
			/>
			<img
				style={{
					height: "2.5em",
					position: "absolute",
					top: "5.5%",
					right: "2%",
				}}
				src={images.searchIcon}
				alt="search icon"
			/>
		</div>
	);
};
