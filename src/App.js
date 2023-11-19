import React from "react";

import "./media/media1480-1024.css";
import "./media/media1024-481.css"
import {Nav} from "./Components/Nav/Nav";
import {Hero} from "./Components/Hero/Hero";
import {Logos} from "./Components/Logos/Logos";
import {About} from "./Components/About/About";
import {Feature} from "./Components/Feature/Feature";
import {CTA} from "./Components/CTA/CTA";
import {Blog} from "./Components/Blog/Blog";
import {Footer} from "./Components/Footer/Footer";

export function App() {
    return (
        <>
            <Nav/>
            <div id="hero"><Hero/></div>
            <Logos/>
            <div id="gpt"><About/></div>
            <div id="feature"><Feature/></div>
            <CTA/>
            <div id="blog"><Blog/></div>
            <div id="footer"><Footer/></div>
        </>
    )
}

