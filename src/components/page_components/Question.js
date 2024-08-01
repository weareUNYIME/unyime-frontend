function Question({ id, q, a }) {
    return (
        <>
            <h2 id={"accordion-flush-heading-"+id}>
                <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200"
                    data-accordion-target={"#accordion-flush-body-" + id}
                    aria-expanded="true"
                    aria-controls={"accordion-flush-body-" + id}
                >
                    <span className="text-left text-neutral-900 text-subtitle font-medium">{q}</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div
                id={"accordion-flush-body-" + id}
                className="hidden"
                aria-labelledby={"accordion-flush-heading-" + id}
            >
                <div className="py-5 border-b border-gray-200">
                    <p className="mb-2 text-neutral-600 font-regular font-light">{a}</p>
                </div>
            </div>
        </>

    );
}

export default Question;