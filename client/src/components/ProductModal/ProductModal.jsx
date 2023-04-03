import React, { useContext, useState } from "react";
import "../../scss/App.scss";
import { colors } from "../../constants";
import { StyledText } from "../../UI/StyledText";
import { StyledBtn } from "../../UI/StyledBtn";
import { CartContext } from "../CartContext";

export const ProductModal = ({
	image,
	name,
	type,
	rating,
	price,
	newPrice = "",
	description,
	//isVisible = false,
}) => {
	const [quantity, setQuantity] = useState(0);
	const { updateProducts } = useContext(CartContext);

	return (
		<div className="productModal">
			<div className="productModal__img-container">
				<img
					className="productModal__img-container_img"
					src={image}
					alt={name}
				/>
				<div className="productModal__img-container__type-wrapper">
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
			<div className="productModal__details-container">
				<StyledText
					size="h6"
					weight="thin"
					family="products"
					color="productText"
				>
					{name}
				</StyledText>
				<img
					className="productModal__details-container_rating"
					src={rating}
					alt="rating"
				/>
				<div className="productModal__details-container__price-container">
					<span className="productModal__details-container__price-container_price">
						<StyledText
							size="p"
							weight="thin"
							family="products"
							color="productOldPriceClr"
						>
							{newPrice !== 0 && `$${price}`}
						</StyledText>
					</span>
					<StyledText
						size="p"
						weight="thin"
						family="products"
						color="productText"
					>
						{newPrice === 0 ? `$${price}` : `$${newPrice}`}
					</StyledText>
				</div>
				<div className="productModal__details-container__description">
					<StyledText
						size="p"
						weight="thin"
						family="paragraphs"
						color="paragraphs"
					>
						{description}
					</StyledText>
				</div>
				<div className="productModal__details-container__quantity-container">
					<StyledText
						size="p"
						weight="thin"
						family="products"
						color="productText"
					>
						Quantity:{" "}
					</StyledText>
					<input
						className="productModal__details-container__quantity-container_quantity"
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
