import React from "react";
import "./FeaturePart.css";
import DiagnosticsImage from "../../../../images/Diagnostics.png";
import ServicesImage from "../../../../images/services.png";
import MaintenanceImage from "../../../../images/maintenance.png";
import { motion } from "framer-motion";

const FeaturePart = () => {
    return (
        <div className="featureRow w-100 d-flex flex-wrap justify-content-center">
            <motion.div
                className=" featureCol"
                animate={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="featureNestedDiv">
                    <div className="featureVector">
                        <img src={DiagnosticsImage} alt="" />
                    </div>
                    <div className="featureInfo">
                        <h2>Diagnostics</h2>
                        <h6>
                            We handle any problem with the
                            utmost skill. We always try not
                            to damage the product by
                            mistake.We try to work by
                            selecting the problem.
						</h6>
                    </div>
                </div>
            </motion.div>
            <motion.div
                className=" featureCol"
                animate={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="featureNestedDiv">
                    <div className="featureVector">
                        <img src={MaintenanceImage} alt="" />
                    </div>
                    <div className="featureInfo">
                        <h2>Maintenance</h2>
                        <h6>
                            We always work with caution.
                            And we always work very
                            efficiently, thinking that the
                            customers will not be harmed in
                            any way.We keep our customers
                            in mind.
						</h6>
                    </div>
                </div>
            </motion.div>
            <motion.div
                className=" featureCol"
                animate={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="featureNestedDiv">
                    <div className="featureVector">
                        <img src={ServicesImage} alt="" />
                    </div>
                    <div className="featureInfo">
                        <h2>Services</h2>
                        <h6>
                            We are very hard in the field
                            of our service. We always try
                            to give our best service. We
                            have no discount in the case of
                            service. We want everyone to be
                            happy in our work.
						</h6>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default FeaturePart;
