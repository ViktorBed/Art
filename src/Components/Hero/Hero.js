import React from "react";

import "./hero.css"
import {RotateCard} from "./RotateCard";

export function Hero() {
    return (
        <>
            <div className="hero">
                <section className="left_block">
                    <h1>We are glad to see you on our site about art and paintings
                    </h1>
                    <p>
                        We are pleased to welcome you to our website dedicated to art. Here you will find everything you
                        are interested in about paintings.
                    </p>
                    <p> We also offer information about art, including artist stories, painting techniques and other
                        interesting facts.
                    </p>
                    <p> We hope that our site will be a source of inspiration and new knowledge about art for you.
                    </p>

                    <form className="form">
                        <input className="email" placeholder="Your Email Address" type="email"/>
                        <button className="get">
                            Get Started
                        </button>
                    </form>
                </section>
                <RotateCard/>
            </div>
            {/*<div className="blur">*/}
            {/*    <div className="child1"></div>*/}
            {/*    <div className="child2"></div>*/}
            {/*    <div className="child3"></div>*/}
            {/*    <div className="child4"></div>*/}
            {/*</div>*/}
        </>
    )
}
