import React from "react";
import bannerImage from "../images/bannerImage.png";
import bannerBackground from "../images/bannerBackground.svg";
import offerBannerImg1 from "../images/offerBannerImg1.svg";
import offerBannerImg2 from "../images/offerBannerImg2.svg";
import lemons from "../images/lemons.svg";
import organicFoodsIcon from "../images/organicFoodsIcon.svg";
import qualityStandardsIcon from "../images/qualityStandardsIcon.svg";
import testimonialBackground from "../images/testimonialBackground.svg";
import saraTaylor from "../images/saraTaylor.svg";
import stars from "../images/stars.svg";
import navigation from "../images/navigation.svg";
import nature from "../images/nature.svg";
import juice from "../images/juice.svg";
import vendure from "../images/vendure.svg";
import cookies from "../images/cookies.svg";
import cabbage from "../images/cabbage.svg";
import tomatoes from "../images/tomatoes.svg";
import personIcon from "../images/personIcon.svg";
import formBackground from "../images/formBackground.svg";
import { StyledText } from "../UI/StyledText";
import { StyledBtn } from "../UI/StyledBtn";

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
					<StyledText
						size="h6"
						weight="normal"
						family="preHeadings"
						color="preHeadings"
					>
						100% Natural Food
					</StyledText>
					<StyledText
						size="h1"
						weight="bold"
						family="headings"
						color="headings"
					>
						Choose the best healthier way of life
					</StyledText>
					<StyledBtn
						textClr="buttonText"
						bgClr="buttonsYellow"
						borderClr="buttonBorderYellow"
						width="narrow"
					>
						Explore Now
					</StyledBtn>
				</div>
			</section>
			<section className="main__offer-banner">
				<div>
					<img src={offerBannerImg1} alt="bananas" />
					<div>
						<StyledText
							size="h6"
							weight="normal"
							family="preHeadings"
							color="preHeadingsWhite"
						>
							Natural!!
						</StyledText>
						<StyledText
							size="h5"
							weight="bold"
							family="headings"
							color="headingsWhite"
						>
							Get Garden Fresh Fruits
						</StyledText>
					</div>
				</div>
				<div>
					<img src={offerBannerImg2} alt="peaches" />
					<div>
						<StyledText
							size="h6"
							weight="normal"
							family="preHeadings"
							color="preHeadings"
						>
							Offer!!
						</StyledText>
						<StyledText
							size="h5"
							weight="bold"
							family="headings"
							color="headings"
						>
							Get 10% off on Vegetables
						</StyledText>
					</div>
				</div>
			</section>
			<section className="main__about-us">
				<img className="main__about-us_img" src={lemons} alt="lemons" />
				<div className="main__about-us__content">
					<StyledText
						size="h5"
						weight="normal"
						family="preHeadings"
						color="preHeadings"
					>
						About Us
					</StyledText>
					<StyledText
						size="h3"
						weight="bold"
						family="headings"
						color="headings"
					>
						We Believe in Working Accredited Farmers
					</StyledText>
					<StyledText
						size="p"
						weight="normal"
						family="paragraphs"
						color="paragraphs"
					>
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
									weight="bold"
									family="headings"
									color="headings"
								>
									Organic Foods Only
								</StyledText>
								<StyledText
									size="p"
									weight="normal"
									family="paragraphs"
									color="paragraphs"
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
									weight="bold"
									family="headings"
									color="headings"
								>
									Quality Standards
								</StyledText>
								<StyledText
									size="p"
									weight="normal"
									family="paragraphs"
									color="paragraphs"
								>
									Simply dummy text of the printing and typesetting industry.
									Lorem Ipsum
								</StyledText>
							</div>
						</div>
					</div>
					<StyledBtn
						textClr="buttonTextWhite"
						bgClr="buttons"
						borderClr="buttonBorder"
						width="narrow"
					>
						Shop Now
					</StyledBtn>
				</div>
			</section>
			{/* PRODUCT SECTION HERE */}
			<section className="main__testimonial">
				<img
					className="main__testimonial_img"
					src={testimonialBackground}
					alt="lemons"
				/>
				<div className="main__testimonial__content">
					<div className="main__testimonial__content__container">
						<StyledText
							size="h5"
							weight="normal"
							family="preHeadings"
							color="preHeadings"
						>
							Testimonial
						</StyledText>
						<StyledText
							size="h3"
							weight="bold"
							family="headings"
							color="headings"
						>
							What Our Customer Saying?
						</StyledText>
						<img
							className="main__testimonial__content__container_img"
							src={saraTaylor}
							alt="Sara Taylor"
						/>
						<img
							className="main__testimonial__content__container_rating"
							src={stars}
							alt="rating"
						/>
						<StyledText
							size="p"
							weight="normal"
							family="paragraphs"
							color="paragraphs"
						>
							Simply dummy text of the printing and typesetting industry. Lorem
							Ipsum simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been.
						</StyledText>
						<StyledText
							size="h6"
							weight="normal"
							family="headings"
							color="headings"
						>
							Sara Taylor
						</StyledText>
						<StyledText
							size="p"
							weight="normal"
							family="headings"
							color="headings"
						>
							Customer
						</StyledText>
						<img
							className="main__testimonial__content__container_nav"
							src={navigation}
							alt="navigation"
						/>
					</div>
				</div>
			</section>
			<section className="main__offer">
				<div className="main__offer__content">
					<StyledText
						size="h5"
						weight="normal"
						family="preHeadings"
						color="preHeadings"
					>
						Offer
					</StyledText>
					<StyledText
						size="h3"
						weight="bold"
						family="headings"
						color="headingsWhite"
					>
						We Offer Organic For You
					</StyledText>
				</div>
				<div></div>
			</section>
			<section className="main__eco-friendly">
				<div className="main__eco-friendly__container">
					<img
						className="main__eco-friendly__container_img"
						src={nature}
						alt="nature landscape"
					/>
				</div>
				<div className="main__eco-friendly__content-container">
					<div className="main__eco-friendly__content-container__card">
						<StyledText
							size="h5"
							weight="normal"
							family="preHeadings"
							color="preHeadings"
						>
							Offer
						</StyledText>
						<StyledText
							size="h3"
							weight="bold"
							family="headings"
							color="headings"
						>
							We Offer Organic For You
						</StyledText>
						<div className="main__eco-friendly__content-container__card__points">
							<div className="main__eco-friendly__content-container__card__points__point">
								<StyledText
									size="h6"
									weight="bold"
									family="headings"
									color="headings"
								>
									Start with Our Company First
								</StyledText>
								<StyledText
									size="p"
									weight="normal"
									family="paragraphs"
									color="paragraphs"
								>
									Sed ut perspiciatis unde omnis iste natus error sit voluptat
									accusantium doloremque laudantium. Sed ut perspiciatis.
								</StyledText>
							</div>
							<div className="main__eco-friendly__content-container__card__points__point">
								<StyledText
									size="h6"
									weight="bold"
									family="headings"
									color="headings"
								>
									Learn How to Grow Yourself
								</StyledText>
								<StyledText
									size="p"
									weight="normal"
									family="paragraphs"
									color="paragraphs"
								>
									Sed ut perspiciatis unde omnis iste natus error sit voluptat
									accusantium doloremque laudantium. Sed ut perspiciatis.
								</StyledText>
							</div>
							<div className="main__eco-friendly__content-container__card__points__point">
								<StyledText
									size="h6"
									weight="bold"
									family="headings"
									color="headings"
								>
									Farming Strategies of Today
								</StyledText>
								<StyledText
									size="p"
									weight="normal"
									family="paragraphs"
									color="paragraphs"
								>
									Sed ut perspiciatis unde omnis iste natus error sit voluptat
									accusantium doloremque laudantium. Sed ut perspiciatis.
								</StyledText>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="main__gallery">
				<img className="main__gallery_img" src={juice} alt="juice" />
				<img
					className="main__gallery_img"
					src={vendure}
					alt="fruit & vegetables"
				/>
				<img className="main__gallery_img" src={cookies} alt="nuts & cookies" />
			</section>
			<section className="main__news">
				<div className="main__news__container">
					<div className="main__news__container__content">
						<div className="main__news__container__content__headings">
							<StyledText
								size="h5"
								weight="medium"
								family="preHeadings"
								color="preHeadings"
							>
								News
							</StyledText>
							<StyledText
								size="h4"
								weight="bold"
								family="headings"
								color="headings"
							>
								Discover weekly content about organic food, & more
							</StyledText>
						</div>
						<div>
							<button></button>
						</div>
					</div>
					<div className="main__news__container__imgs-container">
						<div className="main__news__container__imgs-container__img-container">
							<img
								className="main__news__container__imgs-container__img-container_img"
								src={cabbage}
								alt="cabbage"
							/>
							<div className="main__news__container__imgs-container__img-container_date">
								<StyledText
									size="h6"
									weight="semiBold"
									family="headings"
									color="headings"
								>
									25
								</StyledText>
								<StyledText
									size="h6"
									weight="semiBold"
									family="headings"
									color="headings"
								>
									Nov
								</StyledText>
							</div>
							<div className="main__news__container__imgs-container__card">
								<div className="main__news__container__imgs-container__card__content">
									<div className="main__news__container__imgs-container__card__content__name">
										<img src={personIcon} alt="person icon" />
										<StyledText
											size="p"
											weight="normal"
											family="paragraphs"
											color="paragraphs"
										>
											By Rachi Card
										</StyledText>
									</div>
									<StyledText
										size="h6"
										weight="bold"
										family="headings"
										color="headings"
									>
										The Benefits of Vitamin D & How to Get It
									</StyledText>
									<StyledText
										size="p"
										weight="normal"
										family="paragraphs"
										color="paragraphs"
									>
										Simply dummy text of the printing and typesetting industry.
										Lorem Ipsum
									</StyledText>
									<StyledBtn
										textClr="buttonText"
										bgClr="buttonsYellow"
										borderClr="buttonBorderYellow"
										width="narrow"
									>
										Read More
									</StyledBtn>
								</div>
							</div>
						</div>
						<div className="main__news__container__imgs-container__img-container">
							<img
								className="main__news__container__imgs-container__img-container_img"
								src={tomatoes}
								alt="tomatoes"
							/>
							<div className="main__news__container__imgs-container__img-container_date">
								<StyledText
									size="h6"
									weight="semiBold"
									family="headings"
									color="headings"
								>
									25
								</StyledText>
								<StyledText
									size="h6"
									weight="semiBold"
									family="headings"
									color="headings"
								>
									Nov
								</StyledText>
							</div>
							<div className="main__news__container__imgs-container__card">
								<div className="main__news__container__imgs-container__card__content">
									<div className="main__news__container__imgs-container__card__content__name">
										<img src={personIcon} alt="person icon" />
										<StyledText
											size="p"
											weight="normal"
											family="paragraphs"
											color="paragraphs"
										>
											By Rachi Card
										</StyledText>
									</div>
									<StyledText
										size="h6"
										weight="bold"
										family="headings"
										color="headings"
									>
										Our Favourite Summertime Tommeto
									</StyledText>
									<StyledText
										size="p"
										weight="normal"
										family="paragraphs"
										color="paragraphs"
									>
										Simply dummy text of the printing and typesetting industry.
										Lorem Ipsum
									</StyledText>
									<StyledBtn
										textClr="buttonText"
										bgClr="buttonsYellow"
										borderClr="buttonBorderYellow"
										width="narrow"
									>
										Read More
									</StyledBtn>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="main__newsletter">
				<img src={formBackground} alt="oranges" />
				<div className="main__newsletter__heading">
					<StyledText
						size="h3"
						weight="bold"
						family="headings"
						color="headingsWhite"
					>
						Subscribe to our Newsletter
					</StyledText>
				</div>
				<div className="main__newsletter__form">
					<input
						className="main__newsletter__form_input"
						type="text"
						placeholder="Your Email Address"
					/>
					<StyledBtn
						textClr="buttonTextWhite"
						bgClr="buttons"
						borderClr="buttonBorder"
						width="wide"
					>
						Subscribe
					</StyledBtn>
				</div>
			</section>
		</div>
	);
};
