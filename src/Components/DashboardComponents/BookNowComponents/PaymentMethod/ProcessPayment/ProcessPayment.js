import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// import { CardElement } from "@stripe/react-stripe-js";
import SplitPaymentMethodForm from "../SplitPaymentMethodForm/SplitPaymentMethodForm";
const stripePromise = loadStripe(
    "pk_test_51Ie8CqAtRzL4O6ugsqhlLb8TyNxjA4ZuN9DYq6MQd2UmHDf9pZg5wCRKOtCq1NahUIdHC7nSiObyoFb70oajoEZW00PbGJ1kxr"
);
const ProcessPayment = ({ totalAmount, setPaymentData }) => {
    return (
        <div style={{ width: "300px", margin: "0 auto" }}>
            <h5 className="text-center " style={{ color: "white" }}>
                Payment By Card
			</h5>
            <hr
                style={{
                    bottomBorder: "2px solid white",
                    width: "80%",
                }}
            />
            <div>
                <Elements stripe={stripePromise}>
                    <SplitPaymentMethodForm
                        totalAmount={totalAmount}
                        setPaymentData={setPaymentData}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default ProcessPayment;
