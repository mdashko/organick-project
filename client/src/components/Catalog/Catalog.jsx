import React, { useState, useContext } from "react";
import "../../scss/App.scss";
import { Product } from "../Product/Product";
import { StyledBtn } from "../../UI/StyledBtn";
import { ProductContext } from "../ProductContext";

export const Catalog = () => {
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

	const { products } = useContext(ProductContext);

	return (
		<div className="catalog">
			<div className="catalog__product-container">
				{products.slice(0, productsPerView).map((product) => (
					<Product
						productID={product._id}
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
