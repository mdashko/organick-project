import React from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { StyledText } from "../UI/StyledText";
import { StyledBtn } from "../UI/StyledBtn";
import { images } from "../images/index.js";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
	const navigate = useNavigate();
	const navigateToMain = () => {
		navigate("/Main");
	};
	return (
		<>
			<Header />
			<div className="notFound">
				<div className="notFound__banner">
					<img
						className="notFound__banner_background"
						src={images.notFoundBanner}
						alt="not found"
					/>
					<div className="notFound__banner__content">
						<img
							className="notFound__banner__content_img"
							src={images.notFoundErrorNum}
							alt="404"
						/>
						<div className="notFound__banner__content__heading">
							<StyledText
								size="h2"
								weight="bold"
								family="headings"
								color="headings"
							>
								Page not found
							</StyledText>
						</div>
						<StyledText
							size="p"
							weight="normal"
							family="paragraphs"
							color="paragraphs"
						>
							The page you are looking for doesn't exist or has been moved
						</StyledText>
						<div className="notFound__banner__content__wrapper">
							<StyledBtn
								textColor="buttonTextWhite"
								bgColor="buttons"
								borderColor="buttonBorder"
								height="4em"
								width="14em"
								onClick={navigateToMain}
							>
								Go to Homepage
							</StyledBtn>
						</div>
					</div>
				</div>

				<div className="notFound__banner-responsive">
					<img
						className="notFound__banner-responsive_img"
						src={images.notFoundErrorNum}
						alt="404"
					/>
					<div className="notFound__banner-responsive__heading">
						<StyledText
							size="h2"
							weight="bold"
							family="headings"
							color="headings"
						>
							Page not found
						</StyledText>
					</div>
					<StyledText
						size="p"
						weight="normal"
						family="paragraphs"
						color="paragraphs"
					>
						The page you are looking for doesn't exist or has been moved
					</StyledText>
					<div className="notFound__banner-responsive__wrapper">
						<StyledBtn
							textColor="buttonTextWhite"
							bgColor="buttons"
							borderColor="buttonBorder"
							height="4em"
						>
							Go to Homepage
						</StyledBtn>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};
