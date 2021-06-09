import React, { useEffect, useState } from "react";
import "./TestimonialSlider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import photo from "../../../../images/review.png";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import axios from "axios";

const TestimonialSlider = () => {
    const [testimonials, setTestimonials] = useState(null);
    useEffect(() => {
        axios({
            method: "get",
            url: "https://salty-retreat-17704.herokuapp.com/reviews",
            responseType: "stream",
        }).then(function (response) {
            setTestimonials(response.data);
        });
    }, []);
    return (
        <div>
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6100}
            >
                {testimonials?.map((testimonial) => (
                    <TestimonialCard testimonial={testimonial} />
                ))}
            </Carousel>
        </div>
    );
};

export default TestimonialSlider;
