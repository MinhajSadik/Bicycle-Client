import React from "react";
import AboutGarage from "../AboutGarage/AboutGarage";
import ChooseUsPart from "../ChooseUsPart/ChooseUsPart";
import FooterPart from "../FooterComponents/FooterPart/FooterPart";
import Header from "../HeaderComponents/Header/Header";
import Testimonial from "../ReviewsComponents/Testimonial/Testimonial";
import Services from "../Services/Services";

const HomePart = () => {
    return (
        <div>
            <Header />

            <AboutGarage />
            <Services />
            <ChooseUsPart />
            <Testimonial />
            <FooterPart />
        </div>
    );
};

export default HomePart;
