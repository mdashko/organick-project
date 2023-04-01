import React from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { StyledText } from "../UI/StyledText";
import { images } from "../images/index.js";

export const Confirmation = () => {
	return (
		<>
			<Header />
			<div className="confirmation">
				<StyledText size="h2" weight="bold" family="headings" color="headings">
					Thank you for your order
				</StyledText>
				<div className="confirmation__banner">
					<img
						className="confirmation__banner_img"
						src={images.confirmationBanner}
						alt="people"
					/>
				</div>
			</div>

			<Footer />
		</>
	);
};
