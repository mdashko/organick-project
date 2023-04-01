import React, { createContext, useState } from "react";

export const MainContext = createContext(null);
export function MainProvider({ children }) {
	const [products, setProducts] = useState(0);
	function updateProducts(newProducts) {
		setProducts(newProducts);
	}
	return (
		<MainContext.Provider value={{ products, updateProducts }}>
			{children}
		</MainContext.Provider>
	);
}
