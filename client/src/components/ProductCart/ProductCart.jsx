import React, { useState } from "react";
import "../../scss/App.scss";
import { StyledText } from "../../UI/StyledText";
import { StyledBtn } from "../../UI/StyledBtn";

export const ProductCart = ({ id, img, name, price, newPrice = "" }) => {
	return (
		<div className="productCart">
			<div className="productCart__wrapper">
				<div className="productCart__wrapper__content">
					<div className="productCart__wrapper__content__img-container">
						<img
							className="productCart__wrapper__content__img-container_img"
							src={img}
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
								<span>
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
						</div>
					</div>
					<div className="productCart__wrapper__content__quantity-container">
						<StyledText
							size="p"
							weight="thin"
							family="products"
							color="productText"
						>
							Quantity:{" "}
						</StyledText>
						<input
							className="productCart__wrapper__content__quantity-container_quantity"
							type="text"
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
						>
							X
						</StyledBtn>
					</div>
				</div>
				<div className="productCart__wrapper__price-container">
					<div className="productCart__wrapper__price-container__price">
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
			</div>
		</div>
	);
};
