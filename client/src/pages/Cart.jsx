import React, { useState, useContext } from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { StyledText } from "../UI/StyledText";
import { StyledBtn } from "../UI/StyledBtn";
import { images } from "../images/index.js";
import { ProductCart } from "../components/ProductCart/ProductCart";
import { Form } from "../components/Form/Form";
import { CartContext } from "../components/CartContext";
import { CartProvider } from "../components/CartContext";
import { ProductProvider } from "../components/ProductContext";

export const Cart = () => {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [isButtonVisible, setIsButtonVisible] = useState(true);

	const { products } = useContext(CartContext);

	const openForm = () => {
		setIsFormOpen(true);
		setIsButtonVisible(false);
	};

	return (
		<ProductProvider>
			<CartProvider>
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
							{products.map((product) => (
								<ProductCart
									image={product.image}
									name={product.name}
									type={product.type}
									price={product.price}
									newPrice={product.newPrice}
									quantity={product.quantity}
									totalCost={product.totalCost}
								/>
							))}
						</div>
						<div className="cart__cart__price-container">
							<div className="cart__cart__price-container__price">
								<StyledText
									size="h6"
									weight="thin"
									family="products"
									color="productText"
								>
									Total Cost: {`$`}
								</StyledText>
								<StyledText
									size="h6"
									weight="thin"
									family="products"
									color="productText"
								>
									Discount: {}
								</StyledText>
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
			</CartProvider>
		</ProductProvider>
	);
};
