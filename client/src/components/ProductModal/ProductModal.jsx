import React, { useContext, useState } from "react";
import "../../scss/App.scss";
import { colors } from "../../constants";
import { StyledText } from "../../UI/StyledText";
import { StyledBtn } from "../../UI/StyledBtn";
import { MainContext } from "../CartContext";

export const ProductModal = ({
	img,
	name,
	type,
	rating,
	price,
	newPrice = "",
	description,
	isVisible = false,
}) => {
	const [quantity, setQuantity] = useState(0);
	const { updateProducts } = useContext(MainContext);

	return (
		<div
			className="productModal"
			style={{
				display: isVisible ? "flex" : "none",
				margin: "2.5em",
			}}
		>
			<div style={{ width: "25em", height: "24em", position: "relative" }}>
				<img
					style={{
						objectFit: "cover",
						backgroundBlendMode: "multiply",
						width: "inherit",
						height: "inherit",
					}}
					src={img}
					alt={name}
				/>
				<div
					style={{
						borderRadius: "0.5em",
						width: "5em",
						height: "1.6em",
						backgroundColor: colors["productTypeClr"],
						margin: "1em",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						position: "absolute",
						top: "0",
						left: "0",
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
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignSelf: "center",
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
				<img
					style={{ width: "20%", margin: "0.5em 0" }}
					src={rating}
					alt="rating"
				/>
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
							{newPrice !== "" ? price : ""}
						</StyledText>
					</span>
					<StyledText
						size="p"
						weight="thin"
						family="products"
						color="productText"
					>
						{newPrice !== "" ? newPrice : price}
					</StyledText>
				</div>
				<div style={{ margin: "0.5em 0 1em" }}>
					<StyledText
						size="p"
						weight="thin"
						family="paragraphs"
						color="paragraphs"
					>
						{description}
					</StyledText>
				</div>
				<div>
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
						onChange={(e) => setQuantity(e.target.value)}
						type="text"
					/>
					<StyledBtn
						textColor="buttonTextWhite"
						ß
						bgColor="buttons"
						borderColor="buttonBorder"
						width="14.5em"
						height="3.5em"
						onClick={() => updateProducts(quantity)}
					>
						Add To Cart
					</StyledBtn>
				</div>
			</div>
		</div>
	);
};
