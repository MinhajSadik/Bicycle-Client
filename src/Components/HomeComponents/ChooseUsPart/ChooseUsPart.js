import React from "react";
import "./ChooseUsPart.css";
import choosePic from "../../../images/choosePic.jpg";
import SpecialIcon from "../../SharedComponents/SpecialIcon/SpecialIcon";
import ChooseUsPartCard from "../ChooseUsPartCard/ChooseUsPartCard";

const ChooseUsPart = () => {
    return (
        <div style={{ marginTop: "100px" }}>
            <div className="  row w-100  ml-auto mr-auto">
                <div className=" choosePic col-md-4 offset-md-1">
                    <img src={choosePic} alt="" />
                </div>
                <div className="col-md-7 ">
                    <h1 className="text-center">
                        Why Choose Us
					</h1>
                    <div className=" d-flex justify-content-center">
                        <SpecialIcon />
                    </div>
                    <p className="mt-5">
                        We want to give you our best work. We
                        want you to be satisfied with our
                        work.
					</p>
                    <br />
                    <ChooseUsPartCard />
                </div>
            </div>
        </div>
    );
};

export default ChooseUsPart;
