import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Main } from "./main";
import { NotFound } from "./notFound";

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
