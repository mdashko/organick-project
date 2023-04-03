import React, { createContext, useState } from "react";

export const CartContext = createContext(null);
export function CartProvider({ children }) {
	const [products, setProducts] = useState(0);
	function updateProducts(newProducts) {
		setProducts(newProducts);
	}
	return (
		<CartContext.Provider value={{ products, updateProducts }}>
			{children}
		</CartContext.Provider>
	);
}
