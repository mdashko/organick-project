import React from "react";
import bannerImage from "../images/bannerImage.png";
import bannerBackground from "../images/bannerBackground.svg";
import offerBannerImg1 from "../images/offerBannerImg1.svg";
import offerBannerImg2 from "../images/offerBannerImg2.svg";
import lemons from "../images/lemons.svg";
import organicFoodsIcon from "../images/organicFoodsIcon.svg";
import qualityStandardsIcon from "../images/qualityStandardsIcon.svg";
import { StyledText } from "../UI/StyledText";

export const Main = () => {
	return (
		<div className="main">
			<section className="main__banner">
				<img
					className="main__banner_background"
					src={bannerBackground}
					alt=""
				/>
				<img className="main__banner_img" src={bannerImage} alt="delicious" />
				<div className="main__banner__container">
					<StyledText size="h5" weight="400" text="preHeading" color="green">
						100% Natural Food
					</StyledText>
					<StyledText size="h1" weight="800" text="heading" color="darkBlue">
						Choose the best healthier way of life
					</StyledText>
					<button></button>
				</div>
			</section>
			<section className="main__offer-banner">
				<div>
					<img src={offerBannerImg1} alt="bananas" />
					<div>
						<StyledText size="p" weight="400" text="preHeading" color="white">
							Natural!!
						</StyledText>
						<StyledText size="h5" weight="800" text="heading" color="white">
							Get Garden Fresh Fruits
						</StyledText>
					</div>
				</div>
				<div>
					<img src={offerBannerImg2} alt="peaches" />
					<div>
						<StyledText size="p" weight="400" text="preHeading" color="green">
							Offer!!
						</StyledText>
						<StyledText size="h5" weight="800" text="heading" color="darkBlue">
							Get 10% off on Vegetables
						</StyledText>
					</div>
				</div>
			</section>
			<section className="main__about-us">
				<img className="main__about-us_img" src={lemons} alt="lemons" />
				<div className="main__about-us__content">
					<StyledText size="h5" weight="400" text="preHeading" color="green">
						About Us
					</StyledText>
					<StyledText size="h3" weight="800" text="heading" color="darkBlue">
						We Believe in Working Accredited Farmers
					</StyledText>
					<StyledText size="p" weight="300" text="paragraph" color="darkBlue">
						Simply dummy text of the printing and typesetting industry. Lorem
						had ceased to been the industry's standard dummy text ever since the
						1500s, when an unknown printer took a galley.
					</StyledText>
					<div className="main__about-us__content__points">
						<div className="main__about-us__content__points__point">
							<img
								className="main__about-us__content__points__point_img"
								src={organicFoodsIcon}
								alt="icon"
							/>
							<div className="main__about-us__content__points__point__content">
								<StyledText
									size="h6"
									weight="800"
									text="heading"
									color="darkBlue"
								>
									Organic Foods Only
								</StyledText>
								<StyledText
									size="p"
									weight="300"
									text="paragraph"
									color="darkBlue"
								>
									Simply dummy text of the printing and typesetting industry.
									Lorem Ipsum
								</StyledText>
							</div>
						</div>
						<div className="main__about-us__content__points__point">
							<img
								className="main__about-us__content__points__point_img"
								src={qualityStandardsIcon}
								alt="icon"
							/>
							<div className="main__about-us__content__points__point__content">
								<StyledText
									size="h6"
									weight="800"
									text="heading"
									color="darkBlue"
								>
									Quality Standards
								</StyledText>
								<StyledText
									size="p"
									weight="300"
									text="paragraph"
									color="darkBlue"
								>
									Simply dummy text of the printing and typesetting industry.
									Lorem Ipsum
								</StyledText>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section></section>
		</div>
	);
};
