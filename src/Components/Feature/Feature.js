import React from "react";

import "./feature.css"
import vr from "../../photos/box.svg"
import vr2 from "../../photos/Image.svg"
import vr3 from "../../photos/circle.svg"
import {Features} from "./ContentFeature";

const featuresData = [
    {
        title: 'Improving end distrusts instantly',
        text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
    },
    {
        title: 'Become the tended active',
        text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
    },
    {
        title: 'Message or am nothing',
        text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
    },
    {
        title: 'Really boy law county',
        text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
    },
];
export function Feature() {
    return (
        <>
            <div className="feature">
                <div className="feature_blocks">
                    <div className="feature_left">
                        <h2>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it
                            Happen.</h2>
                        <h3 className="feature_link">Request Early Access to Get Started</h3>
                    </div>
                    <div className="feature_mid">
                        {featuresData.map((item, index) => (
                            <Features title={item.title} text={item.text} key={item.title + index} />
                        ))}

                    </div>
                </div>
                <div className="features">
                       <div className="photos">
                           <img src={vr} alt="girl with vr on" className="photo"/>
                           <img src={vr2} alt="girl with vr on" className="photo"/>
                           <img src={vr3} alt="girl with vr on" className="photo2"/>
                       </div>
                    <nav className="message">
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M11.0833 14.25C11.0833 13.3755 11.7922 12.6667 12.6667 12.6667H25.3333C26.2078 12.6667 26.9167 13.3755 26.9167 14.25C26.9167 15.1244 26.2078 15.8333 25.3333 15.8333H12.6667C11.7922 15.8333 11.0833 15.1244 11.0833 14.25Z"
                                  fill="white"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M11.0833 20.5833C11.0833 19.7089 11.7922 19 12.6667 19H19C19.8745 19 20.5833 19.7089 20.5833 20.5833C20.5833 21.4578 19.8745 22.1667 19 22.1667H12.6667C11.7922 22.1667 11.0833 21.4578 11.0833 20.5833Z"
                                  fill="white"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M10.6394 27.6506C11.2085 27.1764 11.9259 26.9167 12.6667 26.9167H30.0833C30.9578 26.9167 31.6667 26.2078 31.6667 25.3333V9.5C31.6667 8.62555 30.9578 7.91667 30.0833 7.91667H7.91666C7.04221 7.91667 6.33332 8.62555 6.33332 9.5V31.239L10.6394 27.6506ZM12.6667 30.0833H30.0833C32.7067 30.0833 34.8333 27.9567 34.8333 25.3333V9.5C34.8333 6.87665 32.7067 4.75 30.0833 4.75H7.91666C5.2933 4.75 3.16666 6.87665 3.16666 9.5V31.239C3.16666 33.9239 6.29803 35.3905 8.36057 33.6717L12.6667 30.0833Z"
                                  fill="white"/>
                        </svg>
                    </nav>
                        <nav className="apps">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M11.3333 7.08333H8.5C7.7176 7.08333 7.08333 7.7176 7.08333 8.5V11.3333C7.08333 12.1157 7.7176 12.75 8.5 12.75H11.3333C12.1157 12.75 12.75 12.1157 12.75 11.3333V8.5C12.75 7.7176 12.1157 7.08333 11.3333 7.08333ZM8.5 4.25C6.15279 4.25 4.25 6.15279 4.25 8.5V11.3333C4.25 13.6805 6.15279 15.5833 8.5 15.5833H11.3333C13.6805 15.5833 15.5833 13.6805 15.5833 11.3333V8.5C15.5833 6.15279 13.6805 4.25 11.3333 4.25H8.5Z"
                                      fill="white"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M11.3333 21.25H8.5C7.7176 21.25 7.08333 21.8843 7.08333 22.6667V25.5C7.08333 26.2824 7.7176 26.9167 8.5 26.9167H11.3333C12.1157 26.9167 12.75 26.2824 12.75 25.5V22.6667C12.75 21.8843 12.1157 21.25 11.3333 21.25ZM8.5 18.4167C6.15279 18.4167 4.25 20.3195 4.25 22.6667V25.5C4.25 27.8472 6.15279 29.75 8.5 29.75H11.3333C13.6805 29.75 15.5833 27.8472 15.5833 25.5V22.6667C15.5833 20.3195 13.6805 18.4167 11.3333 18.4167H8.5Z"
                                      fill="white"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M25.5 7.08333H22.6667C21.8843 7.08333 21.25 7.7176 21.25 8.5V11.3333C21.25 12.1157 21.8843 12.75 22.6667 12.75H25.5C26.2824 12.75 26.9167 12.1157 26.9167 11.3333V8.5C26.9167 7.7176 26.2824 7.08333 25.5 7.08333ZM22.6667 4.25C20.3195 4.25 18.4167 6.15279 18.4167 8.5V11.3333C18.4167 13.6805 20.3195 15.5833 22.6667 15.5833H25.5C27.8472 15.5833 29.75 13.6805 29.75 11.3333V8.5C29.75 6.15279 27.8472 4.25 25.5 4.25H22.6667Z"
                                      fill="white"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M25.5 21.25H22.6667C21.8843 21.25 21.25 21.8843 21.25 22.6667V25.5C21.25 26.2824 21.8843 26.9167 22.6667 26.9167H25.5C26.2824 26.9167 26.9167 26.2824 26.9167 25.5V22.6667C26.9167 21.8843 26.2824 21.25 25.5 21.25ZM22.6667 18.4167C20.3195 18.4167 18.4167 20.3195 18.4167 22.6667V25.5C18.4167 27.8472 20.3195 29.75 22.6667 29.75H25.5C27.8472 29.75 29.75 27.8472 29.75 25.5V22.6667C29.75 20.3195 27.8472 18.4167 25.5 18.4167H22.6667Z"
                                      fill="white"/>
                            </svg>
                            <p>My Apps</p>
                        </nav>
                    <div className="left_down">
                        <h2>The possibilities are beyond your imagination</h2>
                            <h3 className="left_text">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</h3>
                        <nav className="explore">Request Early Access to Get Started</nav>
                    </div>
                </div>
            </div>

        </>
    )
}
