import ButtonFill from "../../components/ButtonFill";

function Process() {
    return (
        <div className="Process bg-dark-green text-neutral-000 py-20 flex flex-col items-center">
            {/* Header */}
            <div className="flex flex-col items-center *:text-center">
                <p className="text-section-title font-medium font-bicyclette mb-4">How <span className="italic text-neon-yellow">unyime</span> Works</p>
                <p className="w-full lg:w-[60%]">Designed to make it easy for you to find and participate in meaningful projects, build collaboration and see your impact grow!</p>
            </div>

            {/* Content */}
            <div className="flex flex-col items-center *:mb-5 *lg:mb-0 lg:flex-row justify-between lg:gap-10 *:flex-col py-16">

                {/* Column #1 */}
                <div className="flex flex-col justify-evenly">
                    <div className="flex flex-col content-center *:text-center w-[250px]">
                        <img className="self-center mb-3" src="assets/icons/user-tick.png" alt="User Tick Icon" />
                        <p className="text-regular font-bold">Your Account</p>
                        <p className="text-small">Create your profile and join our community.</p>
                    </div>
                    <div className="flex flex-col content-center *:text-center w-[250px]">
                        <img className="self-center mb-3" src="assets/icons/mouse-circle.png" alt="Mouse Circle Icon" />
                        <p className="text-regular font-bold">Browse Initiatives</p>
                        <p className="text-small">Explore various initiatives aligned with your interests and SDGs.</p>
                    </div>
                </div>

                {/* Photo */}
                {/* <a href="https://www.freepik.com/free-photo/young-black-woman-with-glasses-stands-outdoors-arms-crossed-looking-camera-diverse-group-volunteers-supports-non-profit-program-dedicated-hunger-relief-helping-needy-individuals_77149797.htm#query=black%20volunteers&position=0&from_view=keyword&track=ais_hybrid&uuid=7eb0568a-3966-465b-965c-5f37fb8d21ef">Image by DC Studio</a> on Freepik */}
                <img className="w-[450px]" src="assets/images/landing_smiling-volunteer.png" alt="Smiling black volunteer in blue" />

                {/* Column #2 */}
                <div className="flex flex-col justify-evenly">
                    <div className="flex flex-col content-center *:text-center w-[250px]">
                        <img className="self-center mb-3" src="assets/icons/people.png" alt="People Icon" />
                        <p className="text-regular font-bold">Get Involved</p>
                        <p className="text-small">Apply, volunteer, or donate to initiatives that resonate with you.</p>
                    </div>
                    <div className="flex flex-col content-center *:text-center w-[250px]">
                        <img className="self-center mb-3" src="assets/icons/chart.png" alt="Chart Icon" />
                        <p className="text-regular font-bold">Share Impact</p>
                        <p className="text-small">Work with diverse stakeholders to achieve common goals and track your impact.</p>
                    </div>
                </div>

            </div>

            {/* Call To Action (CTA) */}
            <ButtonFill text="Take an action" />
        </div>
    );
}

export default Process;