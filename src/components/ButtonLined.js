import React from "react";
import '../styles/Button.css';

function ButtonLined({ text, spacing }) {
    return (
        <button type="button" className={"special-font ButtonLined btn " + spacing}>{text}</button>
    );
}

export default ButtonLined;