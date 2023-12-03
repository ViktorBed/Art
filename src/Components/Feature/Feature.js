import React from "react";

import "./feature.css"
import paint from "../../photos/mahoning.svg"
import {Features} from "./ContentFeature";

const featuresData = [
    {
        title: 'Art can be used for education',
        text: 'For example, HBO\'s documentary Chernobyl, about the 1986 Chernobyl nuclear disaster, helped raise awareness of the dangers of nuclear power.',
    },
    {
        title: 'Art create positive change in society',
        text: 'For example, the Black Lives Matter movement uses art to draw attention to racial injustice.',
    },
    {
        title: 'Art make the world more beautiful',
        text: 'For example, sculptures, music and dance can add aesthetics and joy to our lives.',
    },
    {
        title: 'Art is used as a form of self-expression',
        text: 'For example, artwork created by members of marginalized groups has helped them tell their stories and find their place in society.',
    },
];

export function Feature() {
    return (
        <>
            <div className="feature">
                <section className="feature_blocks">
                    <div className="feature_left">
                        <h2>In a rapidly changing world, art is becoming more and more important. It can help us
                            understand the complex problems we face and find ways to solve them</h2>
                        <h3 className="feature_link">Here are some concrete examples of how art can change the
                            world</h3>
                    </div>
                    <div className="feature_mid">
                        {featuresData.map((item, index) => (
                            <Features title={item.title} text={item.text} key={item.title + index}/>
                        ))}

                    </div>
                </section>
                <section className="features">
                    <div className="photos">
                        <img src={paint} alt="Franz Kline | Mahoning | Whitney Museum of American Art"/>
                    </div>
                    <div className="left_down">
                        <h2>Art has become an integral part of the modern world</h2>
                        <h3 className="left_text">In today's world, art has access to a larger audience than ever
                            before. Technologies such as the Internet and social media have made art more accessible and
                            accessible to all. This led to a growing interest in art and its role in society.</h3>
                        <nav className="explore">Mahoning by Franz Kline</nav>
                    </div>
                </section>
            </div>

        </>
    )
}
