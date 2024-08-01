import React, { useState } from "react";
import ButtonFill from "../../components/ButtonFill";

function CTA() {
    const [emailAddress, setEmailAddress] = useState("");

    return (
        <div className="CTA bg-dark-green text-neutral-000 py-20 *:flex *:items-center">
            <form className="flex-col" id="subscribe-form">
                <p className="text-section-title font-bicyclette mb-4 w-[450px] leading-none text-center">Be the first to know when we <span className="text-neon-yellow"><em>Launch</em></span></p>

                <div>
                    <input
                        className="px-3 py-2 me-2 mb-2 w-[350px] rounded-lg placeholder:text-neutral-600 placeholder:text-tiny"
                        type="text" id="login-email-address"
                        value={emailAddress}
                        onChange={e => setEmailAddress(e.target.value)}
                        placeholder="Enter your email"
                    ></input>
                    <ButtonFill text="Sign me up!" />
                </div>

                <p className="text-tiny mt-2">By clicking Sign Up you're confirming that you agree with our <span className="underline">Terms and Conditions</span>.</p>
            </form>
        </div>
    );
}

export default CTA;