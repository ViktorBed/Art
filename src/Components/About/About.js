import React from "react";

import "./about.css"
import {AboutContent} from "./AboutContent";

const ArtData = [
    {
        title: 'Positive',
        text: 'Art can inspire us to be creative. For example, by reading a book, we can get ideas for our own creative expression.',
    },
    {
        title: 'Improvement',
        text: 'Art can help us change the world. For example, political posters or works of art dedicated to social issues.',
    },
    {
        title: 'Development',
        text: 'Art can help us better understand ourselves and other people. For example, by reading a book, we can understand how other people feel, think, experience.',
    },
];

export function About() {
    return (
        <>
            <div className="about">
                <section className="about_top">
                    <div className="about_top_left">
                        <div className="small_div"></div>
                        <h3 className="about_top_logo">What is Art</h3>
                    </div>
                    <p className="about_top_text">Art can help us better understand ourselves and other people. For
                        example, by reading a book, we can understand how other people feel, think, experience. By
                        watching a movie, we can see the world through other people's eyes. Listening to music, we can
                        feel their emotions.
                    </p>
                </section>
                <section className="about_mid">
                    <h2 className="about_mid_h2">Advantages and bright sides of Art</h2>
                    <p className="about_mid_link">Guernica by Pablo Picasso</p>
                </section>
                <section className="about_lower">
                    {ArtData.map((item, index) => (
                        <AboutContent title={item.title} text={item.text} key={item.title + index}/>
                    ))}
                </section>
            </div>
        </>
    )
}
