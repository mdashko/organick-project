import React from "react";
import "../../scss/App.scss";
import { StyledText } from "../../UI/StyledText";
import {images} from "../../images/index.js";

export const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__wrapper">
				<div className="footer__wrapper__contacts">
					<StyledText
						size="h6"
						weight="bold"
						family="headings"
						color="headings"
					>
						Contact Us
					</StyledText>
					<div className="footer__wrapper__contacts__content">
						<div className="footer__wrapper__contacts__content__item">
							<StyledText
								size="p"
								weight="bold"
								family="paragraphs"
								color="paragraphs"
							>
								Email
							</StyledText>
							<StyledText
								size="p"
								weight="medium"
								family="paragraphs"
								color="paragraphs"
							>
								needhelp@Organia.com
							</StyledText>
						</div>
						<div className="footer__wrapper__contacts__content__item">
							<StyledText
								size="p"
								weight="bold"
								family="paragraphs"
								color="paragraphs"
							>
								Phone
							</StyledText>
							<StyledText
								size="p"
								weight="medium"
								family="paragraphs"
								color="paragraphs"
							>
								666 888 888
							</StyledText>
						</div>
						<div className="footer__wrapper__contacts__content__item">
							<StyledText
								size="p"
								weight="bold"
								family="paragraphs"
								color="paragraphs"
							>
								Address
							</StyledText>
							<StyledText
								size="p"
								weight="medium"
								family="paragraphs"
								color="paragraphs"
							>
								88 road, broklyn street, USA
							</StyledText>
						</div>
					</div>
				</div>
				<img src={images.verticalLine} alt="line" />
				<div className="footer__wrapper__media">
					<div className="footer__wrapper__media__logo">
						<img
							className="footer__wrapper__media__logo_img"
							src={images.Logo}
							alt="Logo"
						/>
						<div className="footer__wrapper__media__logo__wrapper">
							<StyledText
								size="h5"
								weight="bold"
								family="headings"
								color="headings"
							>
								Organick
							</StyledText>
						</div>
					</div>
					<div className="footer__wrapper__media__descr">
						<StyledText
							size="p"
							weight="normal"
							family="paragraphs"
							color="paragraphs"
						>
							Simply dummy text of the printing and typesetting industry. Lorem
							Ipsum simply dummy text of the printing
						</StyledText>
					</div>
					<div className="footer__wrapper__media__links">
						<a
							className="footer__wrapper__media__links_item"
							href="https://www.instagram.com/"
						>
							<img src={images.instagramIcon} alt="instagram icon" />
						</a>
						<a
							className="footer__wrapper__media__links_item"
							href="https://www.facebook.com"
						>
							<img src={images.facebookIcon} alt="facebook icon" />
						</a>
						<a
							className="footer__wrapper__media__links_item"
							href="https://twitter.com"
						>
							<img src={images.twitterIcon} alt="twitter icon" />
						</a>
						<a
							className="footer__wrapper__media__links_item"
							href="https://www.pinterest.com/"
						>
							<img src={images.pinterestIcon} alt="pinterest icon" />
						</a>
					</div>
				</div>
				<img src={images.verticalLine} alt="line" />
				<div className="footer__wrapper__pages">
					<StyledText
						size="h6"
						weight="bold"
						family="headings"
						color="headings"
					>
						Utility Pages
					</StyledText>
					<div className="footer__wrapper__pages__content">
						<div className="footer__wrapper__pages__content__item">
							<StyledText
								size="p"
								weight="medium"
								family="paragraphs"
								color="paragraphs"
							>
								Style Guide
							</StyledText>
						</div>
						<div className="footer__wrapper__pages__content__item">
							<StyledText
								size="p"
								weight="medium"
								family="paragraphs"
								color="paragraphs"
							>
								404 Not Found
							</StyledText>
						</div>
						<div className="footer__wrapper__pages__content__item">
							<StyledText
								size="p"
								weight="medium"
								family="paragraphs"
								color="paragraphs"
							>
								Password Protected
							</StyledText>
						</div>
						<div className="footer__wrapper__pages__content__item">
							<StyledText
								size="p"
								weight="medium"
								family="paragraphs"
								color="paragraphs"
							>
								Licences
							</StyledText>
						</div>
						<div className="footer__wrapper__pages__content__item">
							<StyledText
								size="p"
								weight="medium"
								family="paragraphs"
								color="paragraphs"
							>
								Changelog
							</StyledText>
						</div>
					</div>
				</div>
			</div>
			<div className="footer__copyrights">
				<img
					className="footer__copyrights_line"
					src={images.horizontalLine}
					alt="line"
				/>
				<div className="footer__copyrights__content">
					<StyledText
						size="p"
						weight="medium"
						family="paragraphs"
						color="paragraphs"
					>
						Copyright ©{" "}
						<StyledText
							size="p"
							weight="semiBold"
							family="paragraphs"
							color="paragraphs"
						>
							Organick
						</StyledText>{" "}
						| Designed by{" "}
						<StyledText
							size="p"
							weight="semiBold"
							family="paragraphs"
							color="paragraphs"
						>
							VictorFlow
						</StyledText>{" "}
						Templates - Powered by{" "}
						<StyledText
							size="p"
							weight="semiBold"
							family="paragraphs"
							color="paragraphs"
						>
							Webflow
						</StyledText>
					</StyledText>
				</div>
			</div>
		</div>
	);
};
