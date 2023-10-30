import React from "react";
import {Nav} from "./Components/Nav/Nav";
import {Hero} from "./Components/Hero/Hero";
import {Logos} from "./Components/Logos/Logos";
import {Gpt} from "./Components/Gpt/Gpt";
import {Feature} from "./Components/Feature/Feature";
import {CTA} from "./Components/CTA/CTA";
import {Blog} from "./Components/Blog/Blog";
import {Footer} from "./Components/Footer/Footer";

export function App() {
    return (
        <>
            <Nav/>
            <Hero/>
            <Logos/>
            <Gpt/>
            <Feature/>
            <CTA/>
            <Blog/>
            <Footer/>
        </>
    )
}
