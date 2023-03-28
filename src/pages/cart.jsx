import React from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { StyledText } from "../UI/StyledText";
import { StyledBtn } from "../UI/StyledBtn";
import { images } from "../images/index.js";
import { ProductCart } from "../components/ProductCart/ProductCart";

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
			</div>
			<Footer />
		</>
	);
};
