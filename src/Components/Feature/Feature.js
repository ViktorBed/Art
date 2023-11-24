import React from "react";

import "./feature.css"
import paint from "../../photos/mahoning.svg"
import {Features} from "./ContentFeature";

const featuresData = [
    {
        title: 'Improving end distrusts instantly',
        text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
    },
    {
        title: 'Become the tended active',
        text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
    },
    {
        title: 'Message or am nothing',
        text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
    },
    {
        title: 'Really boy law county',
        text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
    },
];
export function Feature() {
    return (
        <>
            <div className="feature">
                <section className="feature_blocks">
                    <div className="feature_left">
                        <h2>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it
                            Happen.</h2>
                        <h3 className="feature_link">Request Early Access to Get Started</h3>
                    </div>
                    <div className="feature_mid">
                        {featuresData.map((item, index) => (
                            <Features title={item.title} text={item.text} key={item.title + index} />
                        ))}

                    </div>
                </section>
                <section className="features">
                       <div className="photos">
                           <img src={paint} alt="Franz Kline | Mahoning | Whitney Museum of American Art"/>
                       </div>
                    <div className="left_down">
                        <h2>The possibilities are beyond your imagination</h2>
                            <h3 className="left_text">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</h3>
                        <nav className="explore">Request Early Access to Get Started</nav>
                    </div>
                </section>
            </div>

        </>
    )
}
