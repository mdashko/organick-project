import React from "react";
import { colors } from "../constants";
import { images } from "../images";
import { StyledText } from "./StyledText";

export const CartButton = ({ onClick, productLength }) => {
	return (
		<div
			style={{
				position: "relative",
				display: "flex",
				boxSizing: "border-box",
				border: `0.06em solid ${colors["headerCartBorderClr"]}`,
				borderRadius: "2.5em",
				width: "10em",
				height: "3.5em",
				cursor: "pointer",
			}}
		>
			<img
				style={{ position: "absolute", height: "3em", left: "3%", top: "5.5%" }}
				src={images.cartIcon}
				alt="cart icon"
			/>
			<div
				style={{
					position: "absolute",
					left: "45%",
					top: "30%",
					textAlign: "center",
				}}
			>
				<StyledText size="p" weight="bold" family="headings" color="headings">
					Cart{" "}
					<span style={{ color: productLength > 0 && "red" }}>
						({productLength})
					</span>
				</StyledText>
			</div>
		</div>
	);
};
