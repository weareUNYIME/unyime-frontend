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
        <div className="Testimonials mt-20 mb-10">
            <p className="text-title font-bicyclette mt-10 leading-none mb-2">What our Users Say...</p>
            <p className="mb-16 text-regular">We tested our product with a few people - here's what they said about Unyime</p>
            <div className="flex flex-wrap justify-between gap-10">
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