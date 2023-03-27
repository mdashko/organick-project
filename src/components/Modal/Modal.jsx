import React, { useState } from "react";
import "../../scss/App.scss";
//import { colors } from "../../constants";
import { StyledText } from "../../UI/StyledText";
import { StyledBtn } from "../../UI/StyledBtn";
//import { images } from "../../images/index.js";




export const Modal = ({ children }) => {
	return (
		<div className="wrapper">
			<div className="wrapper__container">
				<div className="wrapper__container__product">
					{children}
					<div className="wrapper__container__product__btn">
						<StyledBtn 
							textColor="buttonTextWhite"
							bgColor="buttons"
							borderColor="buttonBorder"
							width="4em"
							height="3em"
						>
							X
						</StyledBtn>
					</div>
				</div>
				<div className="wrapper__info">
					<div className="wrapper__info__btns">
						<StyledBtn
							textColor="buttonTextWhite"
							bgColor="buttons"
							borderColor="buttonBorder"
							width="19em"
							height="5em"
						>
							Product Description
						</StyledBtn>
						<StyledBtn
							textColor="buttonText"
							bgColor="buttonLightBlue"
							borderColor="buttonLightBlue"
							width="19em"
							height="5em"
						>
							Additional Info
						</StyledBtn>
					</div>
					<div className="wrapper__info__text">
						<StyledText
							size="p"
							weight="thin"
							family="paragraphs"
							color="paragraphs"
						>
							Welcome to the world of natural and organic. Here you can discover
							the bounty of nature. We have grown on the principles of health,
							ecology, and care. We aim to give our customers a healthy
							chemical-free meal for perfect nutrition. It offers about 8–10%
							carbs. Simple sugars — such as glucose and fructose — make up 70%
							and 80% of the carbs in raw.
						</StyledText>
					</div>
				</div>
			</div>
		</div>
	);
};
