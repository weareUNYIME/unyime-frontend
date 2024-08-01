function Testimonial({ quote, avatarSrc, reviewer, title }) {
    return ( 
        <div className="Testimonial w-full md:w-[40%]">
            <p className="font-medium italic">{'"' + quote + '"'}</p>
            <div className="flex items-center mt-2">
                <div className="h-[50px] w-[50px] rounded-full bg-dark-green me-2"><img src={avatarSrc} alt="Reviewer avatar" /></div>
                <div className="text-tiny">
                    <p className="font-bold">{reviewer}</p>
                    <p >{title}</p>
                </div>
            </div>
        </div>
     );
}

export default Testimonial;