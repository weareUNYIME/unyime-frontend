function Testimonial({ quote, avatarSrc, reviewer, title }) {
    return ( 
        <div className="Testimonial">
            <p className="quote">{'"' + quote + '"'}</p>
            <div className="d-flex align-items-center mt-2">
                <div className="avatar me-2"><img src={avatarSrc} /></div>
                <div className="text-tiny">
                    <p className="reviewer">{reviewer}</p>
                    <p >{title}</p>
                </div>
            </div>
        </div>
     );
}

export default Testimonial;