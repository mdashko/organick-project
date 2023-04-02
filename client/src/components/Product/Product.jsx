import React, { useState } from "react";
import "../../scss/App.scss";
import { colors } from "../../constants";
import { images } from "../../images/index.js";
import { StyledText } from "../../UI/StyledText";
import { ProductModal } from "../ProductModal/ProductModal";
import { Modal } from "../Modal/Modal";

export const Product = ({
	image,
	name,
	type,
	rating,
	price,
	newPrice = "",
}) => {
	const [modalIsVisible, setIsVisible] = useState(false);

	const onClose = () => {
		setIsVisible(false);
	};
	const onOpen = () => {
		setIsVisible(true);
	};
	console.log(image, name, type, rating, price, newPrice);
	return (
		<>
			{/* <Modal isVisible={modalIsVisible} onClose={onClose}>
				<ProductModal />
				{"передай сюди пропси бляха муха "}
			</Modal> */}
			<div
				onClick={onOpen}
				style={{
					borderRadius: "2em",
					backgroundColor: colors["productClr"],
					width: "19em",
					height: "24em",
					display: "flex",
					flexDirection: "column",
					margin: "0.5em",
					cursor: "pointer",
				}}
			>
				<div
					style={{
						borderRadius: "0.5em",
						width: "6em",
						height: "2em",
						backgroundColor: colors["productTypeClr"],
						backgroundBlendMode: "multiply",
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
						width: "auto",
						height: "15em",
					}}
					src={image}
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
									textDecoration: `${newPrice ? "line-throught" : "none"}`,
									color: colors["productOldPriceClr"],
								}}
							>
								<StyledText
									size="p"
									weight="thin"
									family="products"
									color="productOldPriceClr"
								>
									{price}
								</StyledText>
							</span>
							{newPrice && (
								<StyledText
									size="p"
									weight="thin"
									family="products"
									color="productText"
								>
									{newPrice}
								</StyledText>
							)}
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
		</>
	);
};
