import React from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { StyledText } from "../UI/StyledText";
import { StyledBtn } from "../UI/StyledBtn";
import { images } from "../images/index.js";

export const Cart = () => {
	return (
		<>
			<Header />
			<div className="cart">
				<section className="cart__banner">
					<img
						className="cart__banner__background"
						src={images.cartBanner}
						alt="peaches"
					/>
					<div className="cart__banner__name-wrapper">
						<StyledText
							size="h2"
							weight="bold"
							family="headings"
							color="headings"
						>
							Cart
						</StyledText>
					</div>
				</section>

				<section className="cart__cart">
					<div className="cart__cart__product">
						<div className="cart__cart__product__img">
							<img src="" alt="" />
						</div>
						<div className="cart__cart__product__name">
							<StyledText
								size="h5"
								weight="thin"
								family="products"
								color="productText"
							>
								Health Pistachios
							</StyledText>
							<StyledText
								size="p"
								weight="thin"
								family="products"
								color="productOldPriceClr"
							>
								<span
									style={{
										textDecoration: "line-through",
										margin: "0 0.2em",
									}}
								>
									$20.00
								</span>
							</StyledText>
							<StyledText
								size="h6"
								weight="thin"
								family="products"
								color="productText"
							>
								$13.00
							</StyledText>
						</div>
						<div className="cart__cart__product__quantity">
							<StyledText>Quantity: </StyledText>
							<input
								className="cart__cart__product__quantity_number"
								type="text"
								disabled
							/>
							<StyledBtn>X</StyledBtn>
						</div>
					</div>
					<div className="cart__cart__price">
						<StyledText></StyledText>
						<StyledText></StyledText>
					</div>
					<div className="cart__cart__btn">
						<StyledBtn>To order</StyledBtn>
					</div>
				</section>
			</div>
			<Footer />
		</>
	);
};
