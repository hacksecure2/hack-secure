import React from "react";

const GradientButton = ({ children, className = "", ...props }) => {
    return (
        <div className="relative group">
            {/* This div creates the animated, blurred gradient background (the glow) */}
            <div
                className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-xl group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
                aria-hidden="true"
            ></div>
            <button
                {...props}
                className={`relative w-full px-7 py-4 bg-black rounded-lg leading-none flex items-center justify-center font-semibold text-white ${className}`}
            >
                {children}
            </button>
        </div>
    );
};

export default GradientButton;
