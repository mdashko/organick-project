import React from "react";
import "../../scss/App.scss";
//import { colors } from "../../constants";
import { StyledText } from "../../UI/StyledText";
import { StyledBtn } from "../../UI/StyledBtn";
//import { images } from "../../images/index.js";

export const Modal = ({ children }) => {
	return (
		<div className="wrapper">
			<div className="wrapper__container">
				<div className="wrapper__container__content">
					<div className="wrapper__container__content__img-container">
						<img src={children.img} alt={children.children} />
						<div className="wrapper__container__content__img-container__type">
							{children.type}
						</div>
					</div>
					<div className="wrapper__container__content__product-info">
						<StyledText>{children.children}</StyledText>
						<img src={children.rating} alt="rating" />
						<div className="wrapper__container__content__product-info__price">
							<StyledText>{children.oldPrice}</StyledText>
							<StyledText>{children.price}</StyledText>
						</div>
						<StyledText>{children.description}</StyledText>
						<div className="wrapper__container__content__product-info__container">
							<StyledText>Quantity: </StyledText>
							<input
								className="wrapper__container__content__product-info__container_quantity"
								type="text"
							/>
							<StyledBtn>Add To Cart</StyledBtn>
						</div>
						<div className="wrapper__container__content__close-btn">
							<StyledBtn>X</StyledBtn>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
