import React from "react";

function ButtonFill({ text, spacing }) {
    return (
        <button type="button" className={"ButtonFill px-4 py-2.5 border-2 border-neon-yellow rounded-xl font-bold text-dark-green bg-neon-yellow " + spacing}>{text}</button>
    );
}

export default ButtonFill;