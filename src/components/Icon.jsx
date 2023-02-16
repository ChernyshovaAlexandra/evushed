import React from "react";

const Icon = ({ img }) => {
    return (
        <div className="w-12 h-12 rounded-full bg-white text-blue grid place-items-center p-3 glow"
            dangerouslySetInnerHTML={{ __html: img }}
        />
    )
}

export default Icon;