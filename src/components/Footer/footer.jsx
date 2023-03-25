import React from "react";
import "../../scss/App.scss";
import Logo from "../../images/logo.svg";
import instagramIcon from "../../images/instagramIcon.svg";
import facebookIcon from "../../images/facebookIcon.svg";
import twitterIcon from "../../images/twitterIcon.svg";
import pinterestIcon from "../../images/pinterestIcon.svg";
import verticalLine from "../../images/line.svg";
import horizontalLine from "../../images/line2.svg";
import { StyledText } from "../../UI/StyledText";

export const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__wrapper">
				<div className="footer__wrapper__contacts">
					<StyledText size="h6" weight="800" text="heading" color="darkBlue">
						Contact Us
					</StyledText>
					<div className="footer__wrapper__contacts__content">
						<div className="footer__wrapper__contacts__content__item">
							<StyledText
								size="p"
								weight="800"
								text="paragraph"
								color="darkBlue"
							>
								Email
							</StyledText>
							<StyledText
								size="p"
								weight="500"
								text="paragraph"
								color="darkBlue"
							>
								needhelp@Organia.com
							</StyledText>
						</div>
						<div className="footer__wrapper__contacts__content__item">
							<StyledText
								size="p"
								weight="800"
								text="paragraph"
								color="darkBlue"
							>
								Phone
							</StyledText>
							<StyledText
								size="p"
								weight="500"
								text="paragraph"
								color="darkBlue"
							>
								666 888 888
							</StyledText>
						</div>
						<div className="footer__wrapper__contacts__content__item">
							<StyledText
								size="p"
								weight="800"
								text="paragraph"
								color="darkBlue"
							>
								Address
							</StyledText>
							<StyledText
								size="p"
								weight="500"
								text="paragraph"
								color="darkBlue"
							>
								88 road, broklyn street, USA
							</StyledText>
						</div>
					</div>
				</div>
				<img src={verticalLine} alt="line" />
				<div className="footer__wrapper__media">
					<div className="footer__wrapper__media__logo">
						<img
							className="footer__wrapper__media__logo_img"
							src={Logo}
							alt="Logo"
						/>
						<div className="footer__wrapper__media__logo__wrapper">
							<StyledText
								size="h5"
								weight="800"
								text="heading"
								color="darkBlue"
							>
								Organick
							</StyledText>
						</div>
					</div>
					<div className="footer__wrapper__media__descr">
						<StyledText size="p" weight="300" text="paragraph" color="darkBlue">
							Simply dummy text of the printing and typesetting industry. Lorem
							Ipsum simply dummy text of the printing
						</StyledText>
					</div>
					<div className="footer__wrapper__media__links">
						<a
							className="footer__wrapper__media__links_item"
							href="https://www.instagram.com/"
						>
							<img src={instagramIcon} alt="instagram icon" />
						</a>
						<a
							className="footer__wrapper__media__links_item"
							href="https://www.facebook.com"
						>
							<img src={facebookIcon} alt="facebook icon" />
						</a>
						<a
							className="footer__wrapper__media__links_item"
							href="https://twitter.com"
						>
							<img src={twitterIcon} alt="twitter icon" />
						</a>
						<a
							className="footer__wrapper__media__links_item"
							href="https://www.pinterest.com/"
						>
							<img src={pinterestIcon} alt="pinterest icon" />
						</a>
					</div>
				</div>
				<img src={verticalLine} alt="line" />
				<div className="footer__wrapper__pages">
					<StyledText size="h6" weight="800" text="heading" color="darkBlue">
						Utility Pages
					</StyledText>
					<div className="footer__wrapper__pages__content">
						<div className="footer__wrapper__pages__content__item">
							<StyledText
								size="p"
								weight="500"
								text="paragraph"
								color="darkBlue"
							>
								Style Guide
							</StyledText>
						</div>
						<div className="footer__wrapper__pages__content__item">
							<StyledText
								size="p"
								weight="500"
								text="paragraph"
								color="darkBlue"
							>
								404 Not Found
							</StyledText>
						</div>
						<div className="footer__wrapper__pages__content__item">
							<StyledText
								size="p"
								weight="500"
								text="paragraph"
								color="darkBlue"
							>
								Password Protected
							</StyledText>
						</div>
						<div className="footer__wrapper__pages__content__item">
							<StyledText
								size="p"
								weight="500"
								text="paragraph"
								color="darkBlue"
							>
								Licences
							</StyledText>
						</div>
						<div className="footer__wrapper__pages__content__item">
							<StyledText
								size="p"
								weight="500"
								text="paragraph"
								color="darkBlue"
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
					src={horizontalLine}
					alt="line"
				/>
				<div className="footer__copyrights__content">
					<StyledText size="p" weight="300" text="paragraph" color="darkBlue">
						Copyright ©{" "}
						<StyledText size="p" weight="600" text="paragraph" color="darkBlue">
							Organick
						</StyledText>{" "}
						| Designed by{" "}
						<StyledText size="p" weight="600" text="paragraph" color="darkBlue">
							VictorFlow
						</StyledText>{" "}
						Templates - Powered by{" "}
						<StyledText size="p" weight="600" text="paragraph" color="darkBlue">
							Webflow
						</StyledText>
					</StyledText>
				</div>
			</div>
		</div>
	);
};
