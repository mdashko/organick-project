import React, { useContext, useState } from "react";
import "../../scss/App.scss";
import { StyledText } from "../../UI/StyledText";
import { StyledBtn } from "../../UI/StyledBtn";
import { CartContext } from "../CartContext";
import { ProductContext } from "../ProductContext";

export const ProductModal = ({
	productID,
	image,
	name,
	type,
	rating,
	price,
	newPrice = "",
	description,
	//isVisible = false,
}) => {
	const [quantity, setQuantity] = useState(1);
	const { updateProducts } = useContext(CartContext);

	const updateCart = () => {
		const product = {
			productID: productID,
			image: image,
			name: name,
			type: type,
			price: price,
			newPrice: newPrice,
			quantity: quantity,
			totalCost: (newPrice ? newPrice : price) * quantity,
			totalDiscount: newPrice ? (price - newPrice) * quantity : 0,
		};
		updateProducts(product);
	};

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
						value={quantity}
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
						onClick={updateCart}
					>
						Add To Cart
					</StyledBtn>
				</div>
			</div>
		</div>
	);
};
