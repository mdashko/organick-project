import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../scss/App.scss";
import { Product } from "../Product/Product";
import { StyledBtn } from "../../UI/StyledBtn";

export const Catalog = () => {
	const [products, setProducts] = useState([]);
	const [productsPerView, setProductsPerView] = useState(8);

	const clickedLoadMore = () => setProductsPerView(products.length);
	const clickedHideAll = () => setProductsPerView(8);

	const SERVER = "http://localhost:3000";
	// винести в енв файл

	const fetchProducts = () => {
		axios
			.get(`${SERVER}/api/products`)
			.then((res) => {
				setProducts(res.data.products.allProducts);
			})
			.catch((err) => {
				console.log("Error: " + err);
			});
	};

	useEffect(() => fetchProducts(), []);
	// id,
	// image,
	// name,
	// type,
	// rating,
	// price,
	// newPrice = "",
	return (
		<div className="catalog">
			<div className="catalog__product-container">
				{products.map((product) => (
					<Product
						img={product.image}
						name={product.name}
						type={product.type}
						rating={product.rating}
						price={product.price}
						newPrice={product.newPrice}
					/>
				))}
			</div>
			<div className="catalog__btns-container">
				{products.map((i) => (
					<Product />
				))}
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
