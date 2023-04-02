import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../scss/App.scss";
import { Product } from "../Product/Product";
import { StyledBtn } from "../../UI/StyledBtn";

export const Catalog = () => {
	const [products, setProducts] = useState([]);
	const [productsPerView, setProductsPerView] = useState(8);
	const [LoadMoreButton, setLoadMoreButton] = useState(true);
	const [hideAllButton, setHideAllButton] = useState(false);

	const clickedLoadMore = () => {
		setProductsPerView(products.length);
		setLoadMoreButton(false);
		setHideAllButton(true);
	};
	const clickedHideAll = () => {
		setProductsPerView(8);
		setLoadMoreButton(true);
		setHideAllButton(false);
	};

	const SERVER = "http://localhost:5001";
	// винести в енв файл

	const fetchProducts = () => {
		axios
			.get(`${SERVER}/api/products`)
			.then((res) => {
				setProducts(res.data.data);
			})
			.catch((err) => {
				console.log("Error: " + err);
			});
	};

	useEffect(() => fetchProducts(), []);

	return (
		<div className="catalog">
			<div className="catalog__product-container">
				{products
					.slice(0, productsPerView)
					.sort((product) => product.newPrice !== 0)
					.map((product) => (
						<Product
							image={product.image}
							name={product.name}
							type={product.type}
							rating={product.rating}
							price={product.price}
							newPrice={product.newPrice}
							description={product.description}
						/>
					))}
			</div>
			<div className="catalog__btns-container">
				{LoadMoreButton && (
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
				)}
				{hideAllButton && (
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
				)}
			</div>
		</div>
	);
};
