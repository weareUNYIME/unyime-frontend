import React from "react";
import ButtonFill from "../../components/ButtonFill";
import ButtonLined from "../../components/ButtonLined";

function Hero() {
    return (
        <div className="Hero">
            <div className="container">
                <p className="text-title special-font pt-5">We Empower Communities Better with You</p>
                <p className="w-50">Join us and start contributing to sustainable development goals in your community. Together, we can create a better future.</p>
                <div className="py-2">
                    <ButtonFill text="Start an initiative" spacing="me-3" />
                    <ButtonLined text="Learn more" />
                </div>
                <div className="hero-images d-flex align-items-end py-5">
                    <img className="main" src="assets/images/landing_happy-volunteers.png" />
                    <img src="assets/images/landing_slice-1.png" />
                    <img src="assets/images/landing_slice-2.png" />
                    <img src="assets/images/landing_slice-3.png" />
                </div>
            </div>
        </div>
    );
}

export default Hero;