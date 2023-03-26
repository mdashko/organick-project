import React from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { StyledText } from "../UI/StyledText";
import { StyledBtn } from "../UI/StyledBtn";
import { Product } from "../components/Product/Product";
import { images } from "../images/index.js";

export const Main = () => {
	return (
		<>
			<Header />
			<div className="main">
				<section className="main__banner">
					<img
						className="main__banner_background"
						src={images.bannerBackground}
						alt="fruit"
					/>
					<img
						className="main__banner_img"
						src={images.bannerImage}
						alt="delicious"
					/>
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
						<div className="main__banner__container__wrapper">
							<StyledBtn
								textColor="buttonText"
								bgColor="buttonsYellow"
								borderColor="buttonBorderYellow"
							>
								Explore Now
							</StyledBtn>
						</div>
					</div>

					<div className="main__banner__container-responsive">
						<StyledText
							size="h6"
							weight="normal"
							family="preHeadings"
							color="preHeadings"
						>
							100% Natural Food
						</StyledText>
						<StyledText
							size="h5"
							weight="bold"
							family="headings"
							color="headings"
						>
							Choose the best healthier way of life
						</StyledText>
						<div className="main__banner__container-responsive__wrapper">
							<StyledBtn
								textColor="buttonText"
								bgColor="buttonsYellow"
								borderColor="buttonBorderYellow"
							>
								Explore Now
							</StyledBtn>
						</div>
					</div>
				</section>
				<section className="main__offer-banner">
					<div>
						<img src={images.offerBannerImg1} alt="bananas" />
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
						<img src={images.offerBannerImg2} alt="peaches" />
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
					<img
						className="main__about-us_img"
						src={images.lemons}
						alt="lemons"
					/>
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
							had ceased to been the industry's standard dummy text ever since
							the 1500s, when an unknown printer took a galley.
						</StyledText>
						<div className="main__about-us__content__points">
							<div className="main__about-us__content__points__point">
								<img
									className="main__about-us__content__points__point_img"
									src={images.organicFoodsIcon}
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
									src={images.qualityStandardsIcon}
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
						<div className="main__about-us__content__wrapper">
							<StyledBtn
								textColor="buttonTextWhite"
								bgColor="buttons"
								borderColor="buttonBorder"
							>
								Shop Now
							</StyledBtn>
						</div>
					</div>
				</section>
				{/* PRODUCT SECTION HERE */}
				<section className="main__testimonial">
					<img
						className="main__testimonial_img"
						src={images.testimonialBackground}
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
								src={images.saraTaylor}
								alt="Sara Taylor"
							/>
							<img
								className="main__testimonial__content__container_rating"
								src={images.stars}
								alt="rating"
							/>
							<StyledText
								size="p"
								weight="normal"
								family="paragraphs"
								color="paragraphs"
							>
								Simply dummy text of the printing and typesetting industry.
								Lorem Ipsum simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been.
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
								src={images.navigation}
								alt="navigation"
							/>
						</div>
						<div className="main__testimonial__content__achivements">
							<div className="main__testimonial__content__achivements__outer">
								<div className="main__testimonial__content__achivements__inner">
									<StyledText
										size="h4"
										weight="bold"
										family="headings"
										color="headings"
									>
										100%
									</StyledText>
									<StyledText
										size="p"
										weight="normal"
										family="paragraphs"
										color="paragraphs"
									>
										Organic
									</StyledText>
								</div>
							</div>
							<div className="main__testimonial__content__achivements__outer">
								<div className="main__testimonial__content__achivements__inner">
									<StyledText
										size="h4"
										weight="bold"
										family="headings"
										color="headings"
									>
										285
									</StyledText>
									<StyledText
										size="p"
										weight="normal"
										family="paragraphs"
										color="paragraphs"
									>
										Active Product
									</StyledText>
								</div>
							</div>
							<div className="main__testimonial__content__achivements__outer">
								<div className="main__testimonial__content__achivements__inner">
									<StyledText
										size="h4"
										weight="bold"
										family="headings"
										color="headings"
									>
										350+
									</StyledText>
									<StyledText
										size="p"
										weight="normal"
										family="paragraphs"
										color="paragraphs"
									>
										Organic Orchads
									</StyledText>
								</div>
							</div>
							<div className="main__testimonial__content__achivements__outer">
								<div className="main__testimonial__content__achivements__inner">
									<StyledText
										size="h4"
										weight="bold"
										family="headings"
										color="headings"
									>
										25+
									</StyledText>
									<StyledText
										size="p"
										weight="normal"
										family="paragraphs"
										color="paragraphs"
									>
										Years of Farming
									</StyledText>
								</div>
							</div>
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
					<div className="main__offer__products">
						<Product
							img={images.product1}
							type="Vegetable"
							price="$13.00"
							oldPrice="$20.00"
						>
							Mung Bean
						</Product>
						<Product
							img={images.product2}
							type="Vegetable"
							price="$12.00"
							oldPrice="$20.00"
						>
							Brown Hazelnut
						</Product>
						<Product
							img={images.product3}
							type="Vegetable"
							price="$17.00"
							oldPrice="$20.00"
						>
							Onion
						</Product>
						<Product
							img={images.product4}
							type="Vegetable"
							price="$18.00"
							oldPrice="$20.00"
						>
							Cabbage
						</Product>
					</div>
				</section>
				<section className="main__eco-friendly">
					<div className="main__eco-friendly__container">
						<img
							className="main__eco-friendly__container_img"
							src={images.nature}
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
								Eco Friendly
							</StyledText>
							<div className="main__eco-friendly__content-container__card__wrapper">
								<StyledText
									size="h3"
									weight="bold"
									family="headings"
									color="headings"
								>
									We Offer Organic For You
								</StyledText>
							</div>
							<div className="main__eco-friendly__content-container__card__wrapper-responsive">
								<StyledText
									size="h6"
									weight="bold"
									family="headings"
									color="headings"
								>
									We Offer Organic For You
								</StyledText>
							</div>
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
					<img className="main__gallery_img" src={images.juice} alt="juice" />
					<img
						className="main__gallery_img"
						src={images.vendure}
						alt="fruit & vegetables"
					/>
					<img
						className="main__gallery_img"
						src={images.cookies}
						alt="nuts & cookies"
					/>
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
							<div className="main__news__container__content__wrapper">
								<StyledBtn
									textColor="buttonText"
									bgColor="buttonsWhite"
									borderColor="buttonBorder"
								>
									More News
								</StyledBtn>
							</div>
						</div>
						<div className="main__news__container__imgs-container">
							<div className="main__news__container__imgs-container__img-container">
								<img
									className="main__news__container__imgs-container__img-container_img"
									src={images.cabbage}
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
											<img src={images.personIcon} alt="person icon" />
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
											Simply dummy text of the printing and typesetting
											industry. Lorem Ipsum
										</StyledText>
										<div className="main__news__container__imgs-container__card__content__wrapper">
											<StyledBtn
												textColor="buttonText"
												bgColor="buttonsYellow"
												borderColor="buttonBorderYellow"
											>
												Read More
											</StyledBtn>
										</div>
									</div>
								</div>
							</div>
							<div className="main__news__container__imgs-container__img-container">
								<img
									className="main__news__container__imgs-container__img-container_img"
									src={images.tomatoes}
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
											<img src={images.personIcon} alt="person icon" />
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
											Simply dummy text of the printing and typesetting
											industry. Lorem Ipsum
										</StyledText>
										<div className="main__news__container__imgs-container__card__content__wrapper">
											<StyledBtn
												textColor="buttonText"
												bgColor="buttonsYellow"
												borderColor="buttonBorderYellow"
											>
												Read More
											</StyledBtn>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="main__newsletter">
					<img src={images.formBackground} alt="oranges" />
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
						<div className="main__newsletter__form__wrapper">
							<StyledBtn
								textColor="buttonTextWhite"
								bgColor="buttons"
								borderColor="buttonBorder"
								width="14em"
								height="5em"
							>
								Subscribe
							</StyledBtn>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</>
	);
};
