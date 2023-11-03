import React from "react";

import google from "../../photos/google.svg"
import slack from "../../photos/slack.svg"
import atlassian from "../../photos/atlassian.svg"
import dropbox from "../../photos/dropbox.svg"
import shopify from "../../photos/shopify.svg"
import "./logos.css"
export function Logos() {
    return (
        <>
            <section className="logos">
                <img src={google} alt="google"/>
                <img src={slack} alt="slack"/>
                <img src={atlassian} alt="atlassian"/>
                <img src={dropbox} alt="dropbox"/>
                <img src={shopify} alt="shopify"/>
            </section>
        </>
    )
}
