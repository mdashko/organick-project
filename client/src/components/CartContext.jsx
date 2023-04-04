import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);
export function CartProvider({ children }) {
	const [products, setProducts] = useState([]);

	function updateProducts(newProduct) {
		const cart = JSON.parse(localStorage.getItem("cart") || "[]");

		if (cart.some((product) => product.productID === newProduct.productID)) {
			const updateProduct = cart.findIndex(
				(product) => product.productID === newProduct.productID
			);
			cart[updateProduct].quantity = newProduct.quantity;
		} else {
			setProducts([...products, newProduct]);
			cart.push(newProduct);
		}
		localStorage.setItem("cart", JSON.stringify(cart));
	}

	function removeProduct(productID) {
		const newProducts = products.filter((product) => {
			return product.productID !== productID;
		});
		console.log(newProducts);
		setProducts(newProducts);
		localStorage.setItem("cart", JSON.stringify(newProducts));
	}

	useEffect(() => {
		const products = JSON.parse(localStorage.getItem("cart") || "[]");
		setProducts(products);
	}, []);

	return (
		<CartContext.Provider value={{ products, updateProducts, removeProduct }}>
			{children}
		</CartContext.Provider>
	);
}
