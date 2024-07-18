import React from "react";
import Testimonial from "../../components/page_components/Testimonial";

const testimonials = [
    {
        quote: "As a volunteer, I’ve always struggled to find meaningful projects that align with my passion for sustainable development. Uyinme is a game-changer for anyone looking to make a positive impact in their community.",
        avatarSrc: "",
        reviewer: "Hadassah N.",
        title: "Volunteer from Nigeria"
    },
    {
        quote: "Seamless way to connect with individuals and other organizations. The increased visibility and support received will significantly amplify our impact.",
        avatarSrc: "",
        reviewer: "Kweku P.",
        title: "NGO Director from Ghana"
    }
]

function Testimonials() {
    return (
        <div className="Testimonials container my-5">
            <p className="text-section-title special-font">What our Users Say...</p>
            <p className="mt-3 mb-5 text-small">We tested our product with a few people here's what they said about Unyime</p>
            <div className="d-flex justify-content-between">
                {
                    testimonials.map((t, key) => {
                        return <Testimonial
                            key={key}
                            quote={t.quote}
                            avatarSrc={t.avatarSrc}
                            reviewer={t.reviewer}
                            title={t.title}
                        />
                    })
                }
            </div>
        </div>
    );
}

export default Testimonials;