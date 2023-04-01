import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Main } from "./Main";
import { NotFound } from "./NotFound";

const Pages = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" exact element={<Main />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Pages;
