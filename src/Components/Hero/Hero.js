import React from "react";

import "./hero.css"
import people from "../../photos/people.svg"
import face from "../../photos/hero.png"

export function Hero() {
    return (
        <>
            <div className="hero">
                <div className="left_block">
                    <h1>Let’s Build Something
                        amazing with GPT-3
                        OpenAI
                    </h1>
                    <div className="desc">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all
                        exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we
                        years to order allow asked of.
                    </div>
                    <form className="form">
                        <input className="email" placeholder="Your Email Address" type="email"/>
                        <button className="get">
                            Get Started
                        </button>
                    </form>
                    <div className="signup">
                        <img src={people} alt="People" className="people"/>
                        1,600 people requested access a visit in last 24 hours
                    </div>
                </div>
                <img src={face} alt="Face" className="face"/>
            </div>
        </>
    )
}
