function Benefits() {
    return (
        <div className="flex flex-col lg:flex-row justify-between gap-10 my-20">
            <img className="" src="assets/images/landing_volunteer-back.png" alt="Back of black person in a blue shirt with 'Volunteer' on the back" />
            <div className=" flex flex-col justify-between">
                <div>
                    <p className="text-subtitle font-medium">Empower Your community</p>
                    <p className="text-small text-neutral-600">Whether it's through volunteering, advocacy, or providing financial support, your contributions can create meaningful change.</p>
                </div>
                <div>
                    <p className="text-subtitle font-medium">Access Opportunities</p>
                    <p className="text-small text-neutral-600">Discover a wide range of opportunities that align with your skills and interests. Our platform offers various ways to get involved.</p>

                </div>
                <div>
                    <p className="text-subtitle font-medium">Learn and Grow</p>
                    <p className="text-small text-neutral-600">Participate in initiatives that challenge you, develop new skills, and expand your knowledge about sustainable development.</p>
                </div>
            </div>
        </div>
    );
}

export default Benefits;