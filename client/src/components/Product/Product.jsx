import React, { useState } from "react";
import "../../scss/App.scss";
import { images } from "../../images/index.js";
import { StyledText } from "../../UI/StyledText";
import { ProductModal } from "../ProductModal/ProductModal";
import { Modal } from "../Modal/Modal";

export const Product = ({
	productID,
	image,
	name,
	type,
	rating,
	price,
	newPrice = "",
	description,
}) => {
	const [modalIsVisible, setIsVisible] = useState(false);

	const onClose = () => {
		setIsVisible(false);
	};
	const onOpen = () => {
		setIsVisible(true);
	};
	return (
		<>
			<Modal isVisible={modalIsVisible} onClose={onClose}>
				<ProductModal
					productID={productID}
					image={image}
					name={name}
					type={type}
					rating={rating}
					price={price}
					newPrice={newPrice}
					description={description}
					//isVisible={modalIsVisible}
				/>
			</Modal>
			<div className="product" onClick={onOpen}>
				<div className="product__type-wrapper">
					<StyledText
						size="p"
						weight="thin"
						family="products"
						color="productTypeText"
					>
						{type}
					</StyledText>
				</div>
				<img className="product_img" src={image} alt={name} />
				<div className="product__details-container">
					<StyledText
						size="p"
						weight="thin"
						family="products"
						color="productText"
					>
						{name}
					</StyledText>
					<img
						className="product__details-container_line"
						src={images.productLine}
						alt="line"
					/>
					<div className="product__details-container__price-container">
						<div className="product__details-container__price-container__price">
							<span className="product__details-container__price-container__price_wrapper">
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
						<img
							className="product__details-container__price-container_rating"
							src={rating}
							alt="rating"
						/>
					</div>
				</div>
			</div>
		</>
	);
};
