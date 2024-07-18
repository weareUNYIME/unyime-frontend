import React, { useState } from "react";
import ButtonFill from "../../components/ButtonFill";

function CTA() {
    const [emailAddress, setEmailAddress] = useState("");

    return (
        <div className="CTA py-5">
            <form className="d-flex flex-column container" id="subscribe-form">
                <p className="text-section-title special-font mb-4">Be the first to know when we <span className="text-yellow"><em>Launch</em></span></p>
                
                <div className="d-flex justify-items-center">
                    <input className="px-3 py-2 me-2 mb-2" type="text" id="login-email-address" value={emailAddress} onChange={e => setEmailAddress(e.target.value)} placeholder="Enter your email"></input>
                    <ButtonFill text="Sign me up!" />
                </div>
                
                <p className="text-tiny">By clicking Sign Up you're confirming that you agree with our <span className="text-decoration-underline">Terms and Conditions</span>.</p>
            </form>
        </div>
    );
}

export default CTA;