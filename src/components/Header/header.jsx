import React from "react";
import "../../scss/App.scss";
import { pagesLinks } from "../../constants";
import { images } from "../../images/index.js";

export const Header = () => {
	return (
		<div className="header">
			<div className="header__logo">
				<img className="header__logo_logo" src={images.Logo} alt="logo" />
				<p className="header__logo_text">Organick</p>
			</div>
			<div className="header__navbar">
				{pagesLinks.map((page) => (
					<a className="header__navbar_item" href={page.path}>
						{page.label}
					</a>
				))}
			</div>
			<div className="header__inputs">
				<div className="header__inputs_search">
					<input className="header__inputs_search_input" type="text" />
					<img
						className="header__inputs_search_icon"
						src={images.searchIcon}
						alt="search icon"
					/>
				</div>

				<div className="header__inputs_cart">
					<img
						className="header__inputs_cart_icon"
						src={images.cartIcon}
						alt="cart icon"
					/>
					<p className="header__inputs_cart_name">Cart(0)</p>
				</div>
			</div>
		</div>
	);
};
