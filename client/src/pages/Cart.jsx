import React, { useState } from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { StyledText } from "../UI/StyledText";
import { StyledBtn } from "../UI/StyledBtn";
import { images } from "../images/index.js";
import { ProductCart } from "../components/ProductCart/ProductCart";
import { Form } from "../components/Form/Form";

export const Cart = () => {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [isButtonVisible, setIsButtonVisible] = useState(true);

	const openForm = () => {
		setIsFormOpen(true);
		setIsButtonVisible(false);
	};

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

				<div className="cart__cart">
					<div className="cart__cart__products-container">
						<div className="cart__cart__products-container__product">
							<ProductCart
								img={"https://drive.google.com/uc?export=view&id=1vvKM0w9bQn2ErxkBm8fZWZr_HHYjQFe0"}
								name="Brown Hazelnut"
								price="$20.00"
								newPrice="$12.00"
							/>
						</div>
						<div className="cart__cart__products-container__product">
							<ProductCart
								img={"https://drive.google.com/uc?export=view&id=1vvKM0w9bQn2ErxkBm8fZWZr_HHYjQFe0"}
								name="product test"
								price="$20.00"
								newPrice="$12.00"
							/>
						</div>
					</div>
					<div className="cart__cart__order-btn">
						{isButtonVisible && (
							<StyledBtn
								textColor="buttonTextWhite"
								bgColor="buttons"
								borderColor="buttonBorder"
								onClick={openForm}
							>
								To order
							</StyledBtn>
						)}
					</div>
					{isFormOpen && <Form />}
				</div>
			</div>
			<Footer />
		</>
	);
};
