import React from "react";

export function AboutContent({title, text}) {
    return (
        <>
            <div className="about_lower_block">
                <div className="about_top_left">
                    <div className="small_div"></div>
                    <h3 className="about_top_logo">{title}</h3>
                </div>
                <p className="about_lower_text">{text}
                </p>
            </div>
        </>
    )
}
