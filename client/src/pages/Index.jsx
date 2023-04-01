import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Main } from "./Main";
import { Cart } from "./Cart";
import { NotFound } from "./NotFound";

const Pages = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" exact element={<Main />} />
					<Route path="/Cart" exact element={<Cart />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Pages;
