import React, { useMemo, useState } from "react";
import {
	useStripe,
	useElements,
	CardNumberElement,
	CardCvcElement,
	CardExpiryElement,
} from "@stripe/react-stripe-js";
import "./PaymentMethodForm.css";
import { Col, Form } from "react-bootstrap";
const useOptions = () => {
	const options = useMemo(
		() => ({
			style: {
				base: {
					fontSize: "16px",
					color: "#424770",
					letterSpacing: "0.025em",
					fontFamily: "Source Code Pro, monospace",
					"::placeholder": {
						color: "#aab7c4",
					},
				},
				invalid: {
					color: "#9e2146",
				},
			},
		}),
		[]
	);

	return options;
};

const SplitPaymentMethodForm = ({ totalAmount, setPaymentData }) => {
	const stripe = useStripe();
	const elements = useElements();
	const options = useOptions();
	const [paymentError, setPaymentError] = useState(null);
	// eslint-disable-next-line no-unused-vars
	const [paymentSuccess, setPaymentSuccess] = useState(null);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js has not loaded yet. Make sure to disable
			// form submission until Stripe.js has loaded.
			return;
		}

		const { error, paymentMethod } = await stripe.createPaymentMethod(
			{
				type: "card",
				card: elements.getElement(CardNumberElement),
			}
		);
		if (error) {
			setPaymentError(error.message);
			setPaymentSuccess(null);
			console.log("[error]", error);
		} else {
			console.log("[PaymentMethod]", paymentMethod);
			setPaymentData(paymentMethod);
			setPaymentSuccess(paymentMethod.id);
			setPaymentError(null);
			// handlePaymentSubmit(paymentMethod.id);
		}
	};

	return (
		<div className="paymentForm">
			<Form onSubmit={handleSubmit}>
				<Form.Row>
					<Form.Group
						as={Col}
						className=" cardRow p-0"
					>
						<Form.Label className="labelText">
							Card Number
						</Form.Label>

						<CardNumberElement
							className="cardInputBox"
							options={options}
							onReady={() => {
								console.log(
									"CardNumberElement [ready]"
								);
							}}
							onChange={(event) => {
								console.log(
									"CardNumberElement [change]",
									event
								);
							}}
						/>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group
						as={Col}
						className=" cardRow p-0"
					>
						<Form.Label className="labelText">
							Expiration date
						</Form.Label>

						<CardExpiryElement
							className="cardInputBox"
							options={options}
							onReady={() => {
								console.log(
									"CardNumberElement [ready]"
								);
							}}
							onChange={(event) => {
								console.log(
									"CardNumberElement [change]",
									event
								);
							}}
						/>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group
						as={Col}
						className=" cardRow p-0"
					>
						<Form.Label className="labelText">
							CVC
						</Form.Label>

						<CardCvcElement
							className="cardInputBox"
							options={options}
							onReady={() => {
								console.log(
									"CardNumberElement [ready]"
								);
							}}
							onChange={(event) => {
								console.log(
									"CardNumberElement [change]",
									event
								);
							}}
						/>
					</Form.Group>
				</Form.Row>

				{paymentError && (
					<Form.Row className=" df-lex  justify-content-center">
						<div className="text-danger text-center">
							{paymentError}
						</div>
					</Form.Row>
				)}

				<button class="submitButton mt-5">
					Pay {totalAmount} Tk.
					<div class="SubmitButton__horizontal"></div>
					<div class="submitButton__vertical"></div>
				</button>
			</Form>
		</div>
	);
};

export default SplitPaymentMethodForm;
