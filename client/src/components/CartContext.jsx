import React, { createContext, useState } from "react";
import { ifProductExists } from "../constants";

export const CartContext = createContext(null);
export function CartProvider({ children }) {
	const [products, setProducts] = useState([]);

	function updateProducts(newProduct) {
		const cart = JSON.parse(localStorage.getItem("cart") || "[]");
		if (ifProductExists(newProduct, cart)) {
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
	//useEffect(() => updateProducts(), []);

	return (
		<CartContext.Provider value={{ products, updateProducts }}>
			{children}
		</CartContext.Provider>
	);
}
