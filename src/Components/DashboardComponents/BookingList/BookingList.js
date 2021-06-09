import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../../App";
import BookingListForm from "./BookingListForm";
import SpecialIcon from "../../SharedComponents/SpecialIcon/SpecialIcon";

const BookingList = () => {
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useContext(UserContext);
    const [bookingList, setBookingList] = useState(null);
    useEffect(() => {
        axios({
            method: "get",
            url: `https://salty-retreat-17704.herokuapp.com/bookingList/${user?.email}`,
            responseType: "stream",
        }).then(function (response) {
            setBookingList(response.data);
        });
    }, [user]);

    const bookingListStyle = {
        width: "80%",
        minHeight: "500px",
        backgroundColor: "gray",
        padding: " 50px",
        margin: "0 auto",
    };

    return (
        <div style={bookingListStyle}>
            <h3 className="text-center">Booking List</h3>
            <div className="icon  d-flex justify-content-center mb-5">
                <SpecialIcon />
            </div>
            <div className="d-flex flex-wrap justify-content-center   ">
                {bookingList?.map((booking) => (
                    <BookingListForm booking={booking} />
                ))}
            </div>
        </div>
    );
};

export default BookingList;
