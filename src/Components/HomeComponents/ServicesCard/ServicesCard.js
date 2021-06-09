import React from "react";
// import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
// import Services from "../Services/Services";
import "./ServicesCard.css";
import Rotate from "react-reveal/Rotate";

const ServicesCard = ({ service }) => {
    const history = useHistory();
    const bookNowHandle = (id) => {
        history.push(`/dashboard/bookNow/${id}`);
    };
    return (
        <Rotate top left>
            <div className=" serviceCol">
                <div className="serviceNestedDiv">
                    <div className="serviceVector">
                        <img src={service.photo_url} alt="" />
                    </div>
                    <div className="featureInfo">
                        <h2>{service.serviceName}</h2>
                        <p>{service.serviceDescription}</p>
                        <h6>{service.price} TK.</h6>
                    </div>
                    <div className="bookNowBtn mt-2">
                        <button
                            class="btn rounded"
                            onClick={() =>
                                bookNowHandle(
                                    service._id
                                )
                            }
                        >
                            <span class="text-green">
                                Book Now
							</span>
                        </button>
                    </div>
                </div>
            </div>
        </Rotate>
    );
};

export default ServicesCard;
