import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import SpecialIcon from "../../../SharedComponents/SpecialIcon/SpecialIcon";
import SuccessMessage from "../../../SharedComponents/SuccessMessage/SuccessMessage";
import BookNowForm from "../BookNowForm/BookNowForm";
import ProcessPayment from "../PaymentMethod/ProcessPayment/ProcessPayment";
import "./BookNowPart.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookNowPart = () => {
    let { id } = useParams();

    const [isNextClick, setIsNextClick] = useState(false);
    const [bookingData, setBookingData] = useState(null);
    const [paymentData, setPaymentData] = useState(null);

    const [service, setService] = useState(null);
    useEffect(() => {
        axios({
            method: "get",
            url: `https://salty-retreat-17704.herokuapp.com/service/${id}`,
            responseType: "stream",
        }).then(function (response) {
            setService(response.data[0]);
        });
    }, [id]);

    const BookNowStyle = {
        color: "cornsilk",
        fontWeight: "bold",
        backgroundColor: "darkgrey",
        minHeight: "400px",
        padding: "30px",
    };
    const onSubmit = (data) => {
        setBookingData(data);
        setIsNextClick(true);

        console.log(data);
    };

    //
    const history = useHistory();
    const finishClick = () => {
        toast("Your Booking is Successful. We will contact you shortly.");

        const BookNowData = { ...bookingData, ...paymentData };
        BookNowData.Date = new Date().toLocaleDateString();
        BookNowData.status = "Pending";
        BookNowData.servicePhoto = service.photo_url;
        BookNowData.serviceDescription = service.serviceDescription;
        axios({
            method: "post",
            url: "https://salty-retreat-17704.herokuapp.com/bookNow",
            data: BookNowData,
        }).then((result) => {
            console.log(result);
            history.push("/dashboard/dashboardBookNow");
        });
    };
    console.log(paymentData);

    return (
        <div className="BookNowStyle" style={BookNowStyle}>
            <h3 className="text-center">Book Now </h3>
            <div className="icon  d-flex justify-content-center mb-3">
                <SpecialIcon />
            </div>
            {paymentData ? (
                <>
                    <div className="d-flex justify-content-center mt-4">
                        <SuccessMessage
                            successText={
                                "Your   payment is successful.Please Click 'Finish Processing' Button for Complete the Booking  . "
                            }
                        />
                    </div>
                    <div className="d-flex justify-content-center  mt-4">
                        <Button
                            variant="info"
                            onClick={finishClick}
                        >
                            <ToastContainer
                                position="top-right"
                                autoClose={3000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                            />
							Finish Processing
							<ToastContainer />
                        </Button>
                    </div>
                </>
            ) : isNextClick ? (
                <ProcessPayment
                    totalAmount={service.price}
                    setPaymentData={setPaymentData}
                />
            ) : (
                <BookNowForm
                    onSubmit={onSubmit}
                    service={service}
                />
            )}
        </div>
    );
};

export default BookNowPart;
