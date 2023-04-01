import React, { useState, useRef } from "react";
import "../../scss/App.scss";
import { StyledText } from "../../UI/StyledText";
import { StyledBtn } from "../../UI/StyledBtn";
import { OutsideClickWrapper } from "./OutsideClickWrapper";

export const Modal = ({ isVisible, onClose, children }) => {
	if (!isVisible) {
		return null;
	}
	console.log(onClose);
	return (
		<div className="wrapper">
			<OutsideClickWrapper onOutsideClick={onClose}>
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
								aerrow={false}
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
								aerrow={false}
							>
								Product Description
							</StyledBtn>
							<StyledBtn
								textColor="buttonText"
								bgColor="buttonLightBlue"
								borderColor="buttonLightBlue"
								width="19em"
								height="5em"
								aerrow={false}
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
								Welcome to the world of natural and organic. Here you can
								discover the bounty of nature. We have grown on the principles
								of health, ecology, and care. We aim to give our customers a
								healthy chemical-free meal for perfect nutrition. It offers
								about 8–10% carbs. Simple sugars — such as glucose and fructose
								— make up 70% and 80% of the carbs in raw.
							</StyledText>
						</div>
					</div>
				</div>
			</OutsideClickWrapper>
		</div>
	);
};
