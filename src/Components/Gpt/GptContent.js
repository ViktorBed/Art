import React from "react";

export function GptContent({title, text}) {
    return (
        <>
            <div className="gpt_lower_block">
                <div className="gpt_top_left">
                    <div className="small_div"></div>
                    <h3 className="gpt_top_logo">{title}</h3>
                </div>
                <p className="gpt_lower_text">{text}
                </p>
            </div>
        </>
    )
}
