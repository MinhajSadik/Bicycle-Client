import React from "react";
import "./ChooseUsPartCard.css";
import iconChoose from "../../../images/special.png";

const ChooseUsPartCard = () => {
    return (
        <>
            <div className="row mt-5   text-sm-center">
                <div className="col-md-6 d-flex justify-content-between ">
                    <div className="chooseIcons  ">
                        <img src={iconChoose} alt="" />
                    </div>
                    <div className="informationPart ">
                        <h3>Advanced machines</h3>
                        <p>
                            We have all kinds of high
                            quality equipment. We always
                            try to have any kind of good
                            quality equipment.Whatever kind
                            of service you get from us,
                            that effort.
						</p>
                    </div>
                </div>
                <div className="col-md-6 d-flex   ">
                    <div className="chooseIcons">
                        <img src={iconChoose} alt="" />
                    </div>
                    <div className="informationPart">
                        <h3>Expert Mechanics</h3>
                        <p>
                            Those of us who work here are
                            very skilled. They are 100%
                            skilled in their cause. They
                            have various awards for their
                            workmanship and skills.
						</p>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-6 d-flex  ">
                    <div className="chooseIcons">
                        <img src={iconChoose} alt="" />
                    </div>
                    <div className="informationPart">
                        <h3>Fast Services</h3>
                        <p>
                            We always try to give very fast
                            service. We have special team
                            for fast service. They give
                            very fast service. We solve any
                            problem within one hour.
						</p>
                    </div>
                </div>
                <div className="col-md-6 d-flex   ">
                    <div className="chooseIcons">
                        <img src={iconChoose} alt="" />
                    </div>
                    <div className="informationPart">
                        <h3>Adorable Price</h3>
                        <p>
                            We always try to do everything
                            at a low price. We want
                            everyone to get the best
                            service from us. For this we
                            try to keep the price of our
                            service very low.
						</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChooseUsPartCard;
