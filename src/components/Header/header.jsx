import React from "react";
import Logo from "../../images/logo.svg";
import SearchIcon from "../../images/searchIcon.svg";
import CartIcon from "../../images/cartIcon.svg";
import "../../scss/App.scss";

export const Header = () => {
	return (
		<div className="header">
			<div className="header__logo">
				<img  className="header__logo_logo" src={Logo} alt="logo" />
				<p className="header__logo_text">Organick</p>
			</div>
			<div className="header__navbar">
				<a className="header__navbar_item" href="">Home</a>
				<a className="header__navbar_item" href="">About</a>
				<a className="header__navbar_item" href="">Pages</a>
				<a className="header__navbar_item" href="">Shop</a>
				<a className="header__navbar_item" href="">Project</a>
				<a className="header__navbar_item" href="">News</a>
			</div>
			<div className="header__inputs">
				<div className="header__inputs_search">
					<input className="header__inputs_search_input" type="text" />
					<img className="header__inputs_search_icon" src={SearchIcon} alt="search icon" />
				</div>

				<div className="header__inputs_cart">
					<img className="header__inputs_cart_icon" src={CartIcon} alt="cart icon" />
					<p className="header__inputs_cart_name">Cart(0)</p>
				</div>
			</div>
		</div>
	);
};
