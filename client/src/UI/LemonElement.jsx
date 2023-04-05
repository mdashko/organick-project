import React from "react";
import { images } from "../images/index";

export const LemonElement = () => {
	return (
		<img
			className="animation"
			style={{
				position: "absolute",
				width: "10%",
				left: "35%",
				top: "50%",
				zIndex: 1000,
			}}
			src={images.lemon}
			alt="lemon"
		/>
	);
};
