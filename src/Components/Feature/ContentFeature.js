import React from "react";
import "./feature.css"

export function Features({ title, text }) {
    return (
        <>
            <section className="feature_mid_block">
                <div className="feature_mid_block_mid">
                    <div className="small_div"></div>
                    <h3 className="feature_text">{title}</h3>
                </div>
                <p className="feature_right_block">{text}</p>
            </section>
        </>
    )
}
