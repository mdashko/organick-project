import React from "react";
import "../../scss/App.scss";
import { colors } from "../../constants";
import { StyledText } from "../../UI/StyledText";
import { images } from "../../images/index.js";

export const Product = ({ img, name, type, price, oldPrice = "", rating }) => {
	return (
		<div
			style={{
				borderRadius: "2em",
				backgroundColor: colors["productClr"],
				width: "19em",
				height: "24em",
				display: "flex",
				flexDirection: "column",
				margin: "0.5em",
			}}
		>
			<div
				style={{
					borderRadius: "0.5em",
					width: "6em",
					height: "2em",
					backgroundColor: colors["productTypeClr"],
					margin: "1em",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<StyledText
					size="p"
					weight="thin"
					family="products"
					color="productTypeText"
				>
					{type}
				</StyledText>
			</div>
			<img
				style={{
					backgroundBlendMode: "multiply",
					width: "auto",
					height: "15em",
				}}
				src={img}
				alt={name}
			/>
			<div
				style={{
					margin: "1em",
				}}
			>
				<StyledText
					size="p"
					weight="thin"
					family="products"
					color="productText"
				>
					{name}
				</StyledText>
				<img
					style={{
						alignSelf: "center",
					}}
					src={images.productLine}
					alt="line"
				/>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<span
							style={{
								textDecoration: "line-through",
								color: colors["productOldPriceClr"],
							}}
						>
							<StyledText
								size="p"
								weight="thin"
								family="products"
								color="productOldPriceClr"
							>
								{oldPrice !== "" ? oldPrice : ""}
							</StyledText>
						</span>
						<StyledText
							size="p"
							weight="thin"
							family="products"
							color="productText"
						>
							{price}
						</StyledText>
					</div>
					<img
						style={{
							width: "20%",
						}}
						src={rating}
						alt="rating"
					/>
				</div>
			</div>
		</div>
	);
};
