import React from "react";
import '../styles/Button.css';

function ButtonFill({ text, spacing }) {
    return (
        <button type="button" className={"special-font ButtonFill btn " + spacing}>{text}</button>
    );
}

export default ButtonFill;