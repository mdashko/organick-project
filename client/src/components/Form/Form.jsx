import React, { useState } from "react";
import "../../scss/App.scss";
import { StyledText } from "../../UI/StyledText";
import { StyledInput } from "../../UI/StyledInput";
import { StyledBtn } from "../../UI/StyledBtn";

export const Form = () => {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");
	const [errorName, setErrorName] = useState(false);
	const [errorEmail, setErrorEmail] = useState(false);
	const [errorAddress, setErrorAddress] = useState(false);
	const [errorPhone, setErrorPhone] = useState(false);

	const nameRegex = /^[a-zA-Z\-]+$/;
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const handleFullName = (event) => setFullName(event.target.value);
	const handleEmail = (event) => setEmail(event.target.value);
	const handleAddress = (event) => setAddress(event.target.value);
	const handlePhone = (event) => setPhone(event.target.value);
	const handleMessage = (event) => setMessage(event.target.value);

	const submitForm = () => {
		setErrorName(!nameRegex.test(fullName));
		setErrorEmail(!emailRegex.test(email));
		setErrorAddress(!(address !== ""));
		setErrorPhone(!(phone !== ""));
		if (!errorName && !errorEmail && !errorAddress && !errorPhone) {
			fetch("http://localhost:3000/api/orders/create", {
				method: "POST",
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					fullName,
					email,
					address,
					phone,
					message,
				//	products: products.map((el) => ({ productId: el.id, quantity: el.quantity })),
				//	totalPrice: products.map(el => el.newPrice).reduce((prev, next) => prev + next, 0)
				})
			}).then(res => console.log("good"));
		}
	};

	return (
		<div className="form">
			<div className="form__inputs-container">
				<div>
					<StyledText size="p" weight="thin" family="form" color="formTextForm">
						Full Name*
					</StyledText>
					<StyledInput
						width="300px"
						height="50px"
						placeholder="Your Full Name"
						required={true}
						error={errorName}
						onChange={handleFullName}
					/>
				</div>
				<div>
					<StyledText size="p" weight="thin" family="form" color="formTextForm">
						Your Email*
					</StyledText>
					<StyledInput
						width="300px"
						height="50px"
						placeholder="Your Email Address"
						required={true}
						type="email"
						error={errorEmail}
						onChange={handleEmail}
					/>
				</div>
			</div>
			<div className="form__inputs-container">
				<div>
					<StyledText size="p" weight="thin" family="form" color="formTextForm">
						Address*
					</StyledText>
					<StyledInput
						width="300px"
						height="50px"
						placeholder="Your Address"
						required={true}
						error={errorAddress}
						onChange={handleAddress}
					/>
				</div>
				<div>
					<StyledText size="p" weight="thin" family="form" color="formTextForm">
						Phone number*
					</StyledText>
					<StyledInput
						width="300px"
						height="50px"
						placeholder="Enter your phone"
						required={true}
						type="text"
						error={errorPhone}
						onChange={handlePhone}
					/>
				</div>
			</div>
			<div className="form__inputs-container">
				<div>
					<StyledText size="p" weight="thin" family="form" color="formTextForm">
						Message
					</StyledText>
					<StyledInput
						width="675px"
						height="247px"
						placeholder="some extra information"
						onChange={handleMessage}
					/>
				</div>
			</div>
			<div className="form__btn-container">
				<StyledBtn
					textColor="buttonTextWhite"
					bgColor="buttons"
					borderColor="buttonBorder"
					width="14em"
					height="5em"
					aerrow={false}
					onClick={submitForm}
				>
					Confirm
				</StyledBtn>
			</div>
		</div>
	);
};
