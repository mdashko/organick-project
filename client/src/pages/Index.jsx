import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Main } from "./Main";
import { Cart } from "./Cart";
import { Confirmation } from "./Confirmation";
import { NotFound } from "./NotFound";
import { ProductProvider } from "../components/ProductContext";
import { CartProvider } from "../components/CartContext";

const Pages = () => {
	return (
		<>
			<ProductProvider>
				<CartProvider>
					<BrowserRouter>
						<Routes>
							<Route path="/" exact element={<Main />} />
							<Route path="/Cart" exact element={<Cart />} />
							<Route path="/Confirmation" exact element={<Confirmation />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</BrowserRouter>
				</CartProvider>
			</ProductProvider>
		</>
	);
};

export default Pages;
