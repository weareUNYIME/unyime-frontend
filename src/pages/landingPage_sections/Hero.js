import React from "react";
import ButtonFill from "../../components/ButtonFill";
import ButtonLined from "../../components/ButtonLined";

function Hero() {
    return (
        <div className="Hero bg-dark-green text-neutral-000 pt-10">
            <p className="text-title font-bicyclette leading-none pt-5">We Empower Communities Better with You</p>
            <p className="lg:w-[50%] mt-6">Join us and start contributing to sustainable development goals in your community. Together, we can create a better future.</p>
            <div className="py-5 mt-3">
                <ButtonFill text="Start an initiative" spacing="me-3" />
                <ButtonLined text="Learn more" />
            </div>
            <div className="hero-images flex items-end py-5 *:mr-[10px]">
                <img className="main" src="assets/images/landing_happy-volunteers.png" alt="landing_happy-volunteers" />
                <img src="assets/images/landing_slice-1.png" alt="landing_slice-1" />
                <img src="assets/images/landing_slice-2.png" alt="landing_slice-2" />
                <img src="assets/images/landing_slice-3.png" alt="landing_slice-3" />
            </div>
        </div>
    );
}

export default Hero;