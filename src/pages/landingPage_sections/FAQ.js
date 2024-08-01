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
        <div className="FAQ my-40 flex flex-wrap justify-between">
            <div className="mb-5 lg:mb-0 w-full lg:w-[35%]">
                <p className="text-section-title font-bicyclette leading-none">Frequently Asked Questions</p>
                <p className="mt-3 text-small text-neutral-600">
                    Reach out to us <span className="text-dark-green"><strong>unyime@gmail.com</strong></span> if you have more unanswered questions</p>
            </div>

            <div
                id="accordion-flush"
                data-accordion="collapse"
                data-active-classes="bg-white text-gray-900"
                data-inactive-classes="text-gray-500"
                className="w-full lg:w-[60%]"
            >
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