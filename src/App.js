import React from "react";

import {Nav} from "./Components/Nav/Nav";
import {Hero} from "./Components/Hero/Hero";
import {About} from "./Components/About/About";
import {Feature} from "./Components/Feature/Feature";
import {CTA} from "./Components/CTA/CTA";
import {Blog} from "./Components/Blog/Blog";
import {Footer} from "./Components/Footer/Footer";

export function App() {
    console.log("rerender");

    return (
        <>
            <Nav/>
            <div id="hero"><Hero/></div>
            <div id="about"><About/></div>
            <div id="feature"><Feature/></div>
            <CTA/>
            <div id="blog"><Blog/></div>
            <div id="footer"><Footer/></div>
        </>
    )
}

