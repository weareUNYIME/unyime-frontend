import React from "react";

function ButtonLined({ text, spacing, handleClick }) {
    return (
        <button
            type="button"
            className={"ButtonLined px-4 py-2.5 border-2 border-neon-yellow rounded-xl font-bold text-neon-yellow bg-transparent  " + spacing}
            onClick={handleClick}>
            {text}
        </button>
    );
}

export default ButtonLined;