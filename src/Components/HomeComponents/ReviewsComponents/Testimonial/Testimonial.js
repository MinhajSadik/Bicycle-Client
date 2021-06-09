import React from "react";
import "./Testimonial.css";
import TestimonialSlider from "../TestimonialSlider/TestimonialSlider";
import SpecialIcon from "../../../SharedComponents/SpecialIcon/SpecialIcon";

const Testimonial = () => {
    return (
        <div className="testimonial">
            <div className="testimonialHeader">
                <div className="TestimonialHeader justify-content-center mt-5 pt-5">
                    <h3>Happy Customers</h3>
                    <div className="icon  d-flex justify-content-center mb-5">
                        <SpecialIcon />
                    </div>
                </div>
            </div>
            <TestimonialSlider />
        </div>
    );
};

export default Testimonial;
