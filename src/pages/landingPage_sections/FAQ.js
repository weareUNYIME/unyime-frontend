import React from "react";
import Question from "../../components/page_components/Question";

const FAQs = [
    {
        q: "How can I contribute to an initiative?",
        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum ex sapien, ac accumsan purus sollicitudin ut. Morbi placerat diam non ligula congue vehicula sed eget metus. Curabitur turpis orci, congue vel augue sit amet, consectetur gravida ipsum. Ut sed ipsum vulputate, facilisis enim sit amet, luctus massa."
    },
    {
        q: "How can entities benefit from joining the platform?",
        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum ex sapien, ac accumsan purus sollicitudin ut. Morbi placerat diam non ligula congue vehicula sed eget metus. Curabitur turpis orci, congue vel augue sit amet, consectetur gravida ipsum. Ut sed ipsum vulputate, facilisis enim sit amet, luctus massa."
    },
    {
        q: "What types of initiatives can I find on the platform?",
        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum ex sapien, ac accumsan purus sollicitudin ut. Morbi placerat diam non ligula congue vehicula sed eget metus. Curabitur turpis orci, congue vel augue sit amet, consectetur gravida ipsum. Ut sed ipsum vulputate, facilisis enim sit amet, luctus massa."
    },
    {
        q: "How can I stay updated on new initiatives and opportunities?",
        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum ex sapien, ac accumsan purus sollicitudin ut. Morbi placerat diam non ligula congue vehicula sed eget metus. Curabitur turpis orci, congue vel augue sit amet, consectetur gravida ipsum. Ut sed ipsum vulputate, facilisis enim sit amet, luctus massa."
    }
]

function FAQ() {
    return (
        <div className="FAQ container my-5 py-5 d-flex justify-content-between">
            <div>
                <p className="text-section-title special-font">Frequently Asked Questions</p>
                <p className="mt-3 text-small text-faded">Reach out to us <span className="text-green"><strong>unyime@gmail.com</strong></span> if you have more
                    unanswered questions</p>
            </div>
            <div className="accordion me-3" id="faq-section">
                {
                    FAQs.map((item, key) => <Question
                        key={key}
                        id={key} 
                        q={item.q}
                        a={item.a}
                    />)
                }
            </div>
        </div>
    );
}

export default FAQ;