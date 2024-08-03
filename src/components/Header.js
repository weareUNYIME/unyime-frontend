import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

import ButtonLined from "./ButtonLined";
import ButtonFill from "./ButtonFill";


function Header({onLanding}) {

    const navigate = useNavigate();

    return (
        <nav className="Header *:px-24 h-12 bg-dark-green *:h-full">
            <div className="flex justify-between">
                <NavLink to="/">
                    <div className="Logo h-full flex items-center">
                        {/* <img src="assets/images/logo.png" alt="Unyime Logo - Four puzzle pieces"/> */}
                        <p className="font-bicyclette text-neon-yellow text-subtitle">unyime</p>
                    </div>
                </NavLink>

                <div className={"flex w-[25%] *:text-light-cream *:my-auto justify-between" + (!onLanding && " invisible")}>
                    <NavLink to="/dashboard">
                        <p>Dashboard</p>
                    </NavLink>
                    <NavLink to="/explore">
                        <p>Explore</p>
                    </NavLink>
                    <NavLink to="/explore">
                        <p>About us</p>
                    </NavLink>
                </div>

                <div className={"flex items-center" + (!onLanding && " invisible")}>
                    <ButtonLined text="Login" spacing="me-3" handleClick={() => navigate("/login")} />
                    <ButtonFill text="Sign Up" handleClick={() => navigate("/signup")} />
                </div>
            </div>
        </nav>
    );
}

export default Header;