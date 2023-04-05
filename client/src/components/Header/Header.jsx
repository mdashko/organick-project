import React, { useCallback, useContext, useState } from "react";
import "../../scss/App.scss";
import { pagesLinks } from "../../constants";
import { images } from "../../images/index.js";
import { CartButton } from "../../UI/CartButton";
import { SearchBar } from "../../UI/SearchBar";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";

export const Header = () => {
	const [showMenu, setShownMenu] = useState(false);

	const toggleShownMenu = useCallback((e) => {
		e.stopPropagation();
		setShownMenu((prev) => !prev);
	});

	const { products } = useContext(CartContext);

	const navigate = useNavigate();
	const navigateToCart = () => {
		navigate("/Cart");
	};

	return (
		<div className="header">
			<Link to="/">
				<div className="header__logo">
					<img className="header__logo_logo" src={images.Logo} alt="logo" />
					<p className="header__logo_text">Organick</p>
				</div>
			</Link>
			<div className={`header__navbar ${showMenu && "header__navbar__mobile"}`}>
				{pagesLinks.map((page) => (
					<div className="header__navbar_item">
						<Link to={page.path}>{page.label}</Link>
					</div>
				))}
				{showMenu && (
					<>
						<SearchBar />
						<CartButton productLength={products.length} />
					</>
				)}
			</div>
			<div
				onClick={toggleShownMenu}
				className={`header__burgerMenu ${
					showMenu ? "header_burgerMenuActive" : ""
				}`}
			>
				<img style={{ width: 20, height: 20 }} src={images.bars} alt="bars" />
			</div>
			<div className="header__inputs">
				<SearchBar />
				<CartButton onClick={navigateToCart} productLength={products.length} />
			</div>
		</div>
	);
};
