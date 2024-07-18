function Question({ id, q, a }) {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={"question-"+id}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse-"+id} aria-expanded="false" aria-controls={"collapse-"+id}>
                    { q }
                </button>
            </h2>
            <div id={"collapse-"+id} className="accordion-collapse collapse" aria-labelledby={"question-"+id} data-bs-parent="#faq-section">
                <div className="accordion-body">
                    { a }
                </div>
            </div>
        </div>
    );
}

export default Question;