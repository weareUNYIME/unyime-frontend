import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/Header.css';

import ButtonLined from "./ButtonLined";
import ButtonFill from "./ButtonFill";


function Header() {
    return (
        <nav className="Header navbar navbar-expand-lg">
            <div className="container">
                <NavLink to="/">
                    <div className="Logo navbar-brand">
                        {/* <img src="assets/images/logo.png" alt="Unyime Logo - Four puzzle pieces"/> */}
                        <p className="special-font">unyime</p>
                    </div>
                </NavLink>

                <ul className="navbar-nav">
                    <NavLink to="/dashboard">
                        <li className="nav-item">
                            <p className="nav-link">Dashboard</p>
                        </li>
                    </NavLink>
                    <NavLink to="/explore">
                        <li className="nav-item">
                            <p className="nav-link">Explore</p>
                        </li>
                    </NavLink>
                    <NavLink to="/explore">
                        <li className="nav-item">
                            <p className="nav-link">About us</p>
                        </li>
                    </NavLink>
                </ul>

                <div>
                    <ButtonLined text="Login" spacing="me-3" />
                    <ButtonFill text="Sign Up" />
                </div>
            </div>
        </nav>
    );
}

export default Header;