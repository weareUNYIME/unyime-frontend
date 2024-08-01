function Logos() {
    return (
        <div className="Logo mt-10 py-5">
            <p className="text-center font-bicyclette font-bold">Used by top NGOs, SMEs & enterprises around you</p>
            <div className="*:h-[40px] *:object-scale-down lg:w-[50%] mt-4 mx-auto flex justify-between">
                <img src="assets/images/logos/microsoft-logo.png" alt="Microsoft Logo"/>
                <img src="assets/images/logos/deloitte-logo.png" alt="Deloitte Logo"/>
                <img src="assets/images/logos/global-citizen-logo.jpeg" alt="Global Citizen Logo"/>
                <img src="assets/images/logos/greenpeace-logo.png" alt="GreenPeace Logo"/>
                <img src="assets/images/logos/united-nations-logo.png" alt="United Nations Logo"/>
                {/* <img src="assets/images/logos/webflow-logo.png" alt="Webflow Logo"/> */}
                <img src="assets/images/logos/african-leadership-university-logo.png" alt="Africa Leadership University Logo"/>
            </div>
        </div>
    );
}

export default Logos;