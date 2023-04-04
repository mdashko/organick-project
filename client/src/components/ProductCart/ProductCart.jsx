import React, { useState, useContext } from "react";
import "../../scss/App.scss";
import { StyledText } from "../../UI/StyledText";
import { StyledBtn } from "../../UI/StyledBtn";
import { CartContext } from "../CartContext";

export const ProductCart = ({
	productID,
	image,
	name,
	price,
	newPrice = "",
	quantity,
	totalCost,
}) => {
	const { removeProduct } = useContext(CartContext);

	return (
		<div className="productCart">
			<div className="productCart__wrapper">
				<div className="productCart__wrapper__content">
					<div className="productCart__wrapper__content__img-container">
						<img
							className="productCart__wrapper__content__img-container_img"
							src={image}
							alt={name}
						/>
					</div>
					<div className="productCart__wrapper__content__details-container">
						<div className="productCart__wrapper__content__details-container__name-container">
							<StyledText
								size="h6"
								weight="thin"
								family="products"
								color="productText"
							>
								{name}
							</StyledText>
							<div className="productCart__wrapper__content__details-container__price-container">
								<span className="productCart__wrapper__content__details-container__price-container_wrapper">
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
						</div>
					</div>
					<div className="productCart__wrapper__content__quantity-container">
						<StyledText
							size="p"
							weight="thin"
							family="products"
							color="productText"
						>
							Quantity:
						</StyledText>
						<input
							className="productCart__wrapper__content__quantity-container_quantity"
							type="text"
							value={quantity}
						/>
					</div>
					<div className="productCart__wrapper__content__btn-container">
						<StyledBtn
							textColor="buttonTextWhite"
							bgColor="buttons"
							borderColor="buttonBorder"
							width="4em"
							height="3em"
							aerrow={false}
							onClick={removeProduct(productID)}
						>
							X
						</StyledBtn>
					</div>
				</div>
			</div>
		</div>
	);
};
