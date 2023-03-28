import React, { useState } from "react";
import "../../scss/App.scss";
import { colors } from "../../constants";
import { StyledText } from "../../UI/StyledText";
import { StyledInput } from "../../UI/StyledInput";
import { StyledBtn } from "../../UI/StyledBtn";

export const ProductCart = ({ img, name, price, oldPrice = "" }) => {
	return (
		<div
			className="productCart"
			style={{
				display: "flex",
				flexDirection: "column",
				padding: "2.5em",
				backgroundColor: "#fdb02d29",
				width: "800px",
			}}
		>
			<div
				style={{
					display: "flex",
					//justifyContent: "space-around",
				}}
			>
				<div style={{ width: "200px", height: "150px", position: "relative" }}>
					<img
						style={{
							objectFit: "cover",
							backgroundBlendMode: "multiply",
							width: "inherit",
							height: "inherit",
							borderRadius: "1em",
							border: "5px solid red",
						}}
						src={img}
						alt={name}
					/>
				</div>
				<div
					style={{
						display: "flex",
						margin: "0 2.5em",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<StyledText
						size="h6"
						weight="thin"
						family="products"
						color="productText"
					>
						{name}
					</StyledText>
					<div>
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
								{oldPrice !== "" ? oldPrice : ""}{" "}
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
				</div>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<StyledText
						size="p"
						weight="thin"
						family="products"
						color="productText"
					>
						Quantity:{" "}
					</StyledText>
					<input
						style={{
							border: "0.1em solid #274C5B",
							borderRadius: "1em",
							width: "6.5em",
							height: "3.5em",
							margin: "0 0.5em",
						}}
						type="text"
					/>
				</div>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
				}}
			>
				<StyledText
					size="h6"
					weight="thin"
					family="products"
					color="productText"
				>
					Total Cost:{" "}
				</StyledText>
				<StyledText
					size="h6"
					weight="thin"
					family="products"
					color="productText"
				>
					Discount:{" "}
				</StyledText>
			</div>
		</div>
	);
};
