import React from "react";
import profileImage from "../../../../images/profile.png";

const TestimonialCard = ({ testimonial }) => {
    return (
        <div>
            <img
                style={{ width: "100px", height: "130px" }}
                src={testimonial.photo_url || profileImage}
                alt=""
            />
            <div className="TestimonialCarousel">
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.date}</h4>
                <p>{testimonial.comment}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;
