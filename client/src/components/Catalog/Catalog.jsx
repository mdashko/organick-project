import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../scss/App.scss";
import { Product } from "../Product/Product";
import { StyledBtn } from "../../UI/StyledBtn";

export const Catalog = () => {
	const [products, getProducts] = useState("");
	const [switchButtons, setSwitchButtons] = useState(false);

	const clickedLoadMore = () => setSwitchButtons(true);
	const clickedHideAll = () => setSwitchButtons(false);

	const SERVER = "http://localhost:3000";

	const loadProducts = () => {
		axios
			.get(`${SERVER}/api/products/`)
			.then((res) => {
				const allProducts = res.data.products.allProducts;
				getProducts(allProducts);
				console.log(res);
			})
			// .then((data) => {
			// 	return getProduct(data.data);
			// })
			.catch((err) => {
				console.log("Error: " + err);
			});
	};

	useEffect(() => loadProducts(), []);

	return (
		<div className="catalog">
			<div className="catalog__product-container"></div>
			<div className="catalog__btns-container">
				<div className="catalog__btns-container__load-more-btn">
					<StyledBtn
						textColor="buttonTextWhite"
						bgColor="buttons"
						borderColor="buttonBorder"
						onClick={clickedLoadMore}
					>
						Load More
					</StyledBtn>
				</div>
				<div className="catalog__btns-container__hide-all-btn">
					<StyledBtn
						textColor="buttonTextWhite"
						bgColor="buttons"
						borderColor="buttonBorder"
						onClick={clickedHideAll}
					>
						Hide All
					</StyledBtn>
				</div>
			</div>
		</div>
	);
};
