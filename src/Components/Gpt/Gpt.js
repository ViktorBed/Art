import React from "react";

import "./gpt.css"
import {GptContent} from "./GptContent";

const GptData = [
    {
        title: 'Chat bots',
        text: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought.',
    },
    {
        title: 'Knowledge',
        text: 'At jointures ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b',
    },
    {
        title: 'Education',
        text: 'At jointures ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments.',
    },
];
export function Gpt() {
    return (
        <>
            <div className="gpt">
                <section className="gpt_top">
                    <div className="gpt_top_left">
                        <div className="small_div"></div>
                        <h3 className="gpt_top_logo">What is GPT-3</h3>
                    </div>
                    <p className="gpt_top_text">We so opinion friends me message as delight. Whole front do of plate
                        heard oh ought. His defective nor convinced residence own. Connection has put impossible own
                        apartments boisterous. At join true ladyship an insisted so humanity he. Friendly bachelor
                        entrance to on by.
                    </p>
                </section>
                <section className="gpt_mid">
                    <h2 className="gpt_mid_h2">The possibilities are beyond your imagination</h2>
                    <p className="gpt_mid_link">Explore The Library</p>
                </section>
                <section className="gpt_lower">
                    {GptData.map((item, index) => (
                        <GptContent title={item.title} text={item.text} key={item.title + index} />
                    ))}
                </section>
            </div>
        </>
    )
}
