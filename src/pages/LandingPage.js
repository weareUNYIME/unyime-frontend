import React, { useEffect } from "react";

import Hero from "./landingPage_sections/Hero";
import Logos from "./landingPage_sections/Logos";
import Benefits from "./landingPage_sections/Benefits";
import Process from "./landingPage_sections/Process";
import Testimonials from "./landingPage_sections/Testimonials";
import CTA from "./landingPage_sections/CTA";
import FAQ from "./landingPage_sections/FAQ";

function LandingPage({setOnLanding}) {
    
    useEffect (() => setOnLanding(true));

    return (
        <div className="LandingPage *:px-24">
            <Hero />
            <Logos />
            <Benefits />
            <Process />
            <Testimonials />
            <FAQ />
            <CTA />
        </div>
    );
}

export default LandingPage;