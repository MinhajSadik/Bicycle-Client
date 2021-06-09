import React, { useEffect, useState } from "react";
import axios from "axios";
import SpecialIcon from "../../SharedComponents/SpecialIcon/SpecialIcon";
import ServicesCard from "../../HomeComponents/ServicesCard/ServicesCard";
import serviceLoaderSpinner from "../../../Spinner/service.gif";

const DashboardServices = () => {
    const [services, setServices] = useState(null);
    useEffect(() => {
        axios({
            method: "get",
            url: "https://salty-retreat-17704.herokuapp.com/services",
            responseType: "stream",
        }).then(function (response) {
            setServices(response.data);
        });
    }, []);
    return (
        <>
            <div className="servicesHeader justify-content-center ">
                <h3>Our Services</h3>
                <div className="icon  d-flex justify-content-center mb-5">
                    <SpecialIcon />
                </div>
            </div>
            <div
                className="row w-100 d-flex justify-content-center mt-5  "
                style={{ margin: "10px auto" }}
            >
                {services ? (
                    services.map((service) => (
                        <ServicesCard service={service} />
                    ))
                ) : (
                    <img src={serviceLoaderSpinner} alt="" />
                )}
            </div>
        </>
    );
};

export default DashboardServices;
