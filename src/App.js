import React from "react";
import {Nav} from "./Components/Nav/Nav";
import {Hero} from "./Components/Hero/Hero";
import {Logos} from "./Components/Logos/Logos";
import {Gpt} from "./Components/Gpt/Gpt";
import {Feature} from "./Components/Feature/Feature";

export function App() {
    return (
        <>
            <Nav/>
            <Hero/>
            <Logos/>
            <Gpt/>
            <Feature/>
        </>
    )
}
