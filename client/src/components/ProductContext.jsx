import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext(null);
export function ProductProvider({ children }) {
	const [products, setProducts] = useState([]);
	function updateProducts(newProducts) {
		setProducts(newProducts);
	}
	const fetchProducts = () => {
		axios
			.get(`${process.env.REACT_APP_API_URL}/api/products`)
			.then((res) => {
				let productsArr = res.data.data;
				setProducts(productsArr.sort((a, b) => b.newPrice - a.newPrice));
			})
			.catch((err) => {
				console.log("Error: " + err);
			});
	};

	useEffect(() => fetchProducts(), []);

	return (
		<ProductContext.Provider value={{ products, updateProducts }}>
			{children}
		</ProductContext.Provider>
	);
}
