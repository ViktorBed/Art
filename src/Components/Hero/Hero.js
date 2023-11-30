import React, {useState} from "react";

import "./hero.css"
import {RotateCard} from "./RotateCard";
import {Modal} from "../Modal Window/Modal";

export function Hero() {
    const [modalActive, setModalActive] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleModule = () => {
        setModalActive(true)
    }
    const handleClick = () => {
        window.location.href = "https://en.wikipedia.org/wiki/Art"
    }
    return (
        <>
            <div className="hero">
                <section className="left_block">
                    <h1>We are glad to see you on our site about art and paintings
                    </h1>
                    <p>
                        We are pleased to welcome you to our website dedicated to art. Here you will find everything
                        you
                        are interested in about paintings.
                    </p>
                    <p> We also offer information about art, including artist stories, painting techniques and other
                        interesting facts.
                    </p>
                    <p> We hope that our site will be a source of inspiration and new knowledge about art for you.
                    </p>

                    <form className="form" onSubmit={handleSubmit}>
                        <input className="email" placeholder="Your Email Address" type="email"/>
                        <button onClick={handleModule} className="get">
                            Get Started
                        </button>

                    </form>
                </section>
                <RotateCard/>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <h3 onClick={handleClick} className="h3">Click to read more</h3>
            </Modal>
        </>
    )
}