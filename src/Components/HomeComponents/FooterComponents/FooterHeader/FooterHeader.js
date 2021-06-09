import React from "react";
import "./FooterHeader.css";
import callBtn from "../../../../images/CallBtn.png";

const FooterHeader = () => {
    return (
        <div className=" w-100 footerHeader d-flex align-items-center">
            <div className="container  d-md-flex justify-content-between align-items-center">
                <div className="div  ">
                    <h3>Need any technical solution</h3>
                    <h4>Call Us our 24 hour contact number</h4>
                </div>
                <div className="div d-flex align-items-center callPart">
                    <div className="callIcon ">
                        <img src={callBtn} alt="" />
                    </div>
                    <div className="callText">
                        <p>Contact Phone</p>
                        <h4>+62 1234 5678</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterHeader;
