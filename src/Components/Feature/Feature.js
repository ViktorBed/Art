import React from "react";

import "./feature.css"
import vr from "../../photos/ill.svg"
export function Feature() {
    return (
        <>
            <div className="feature">
               <div className="feature_blocks">
                   <div className="feature_left">
                       <h2>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h2>
                       <div className="feature_link">Request Early Access to Get Started</div>
                   </div>
                   <div className="feature_mid">
                       <div className="feature_mid_block">
                           <div className="feature_mid_block_mid">
                               <div className="small_div"></div>
                               <div className="feature_text">Improving end distrusts instantly </div>
                           </div>
                           <div className="feature_right_block">From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.</div>
                       </div>

                       <div className="feature_mid_block">
                           <div className="feature_mid_block_mid">
                               <div className="small_div"></div>
                               <div className="feature_text">Become the tended active </div>
                           </div>
                           <div className="feature_right_block">Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</div>
                       </div>
                       <div className="feature_mid_block">
                           <div className="feature_mid_block_mid">
                               <div className="small_div"></div>
                               <div className="feature_text">Message or am nothing</div>
                           </div>
                           <div className="feature_right_block">Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.</div>
                       </div>
                       <div className="feature_mid_block">
                           <div className="feature_mid_block_mid">
                               <div className="small_div"></div>
                               <div className="feature_text">Really boy law county</div>
                           </div>
                           <div className="feature_right_block">Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.</div>
                       </div>
                   </div>
               </div>
                <div className="features2">
                    <img src={vr} alt="girl with vr on" className="photo"/>
                    <div className="message">
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.0833 14.25C11.0833 13.3755 11.7922 12.6667 12.6667 12.6667H25.3333C26.2078 12.6667 26.9167 13.3755 26.9167 14.25C26.9167 15.1244 26.2078 15.8333 25.3333 15.8333H12.6667C11.7922 15.8333 11.0833 15.1244 11.0833 14.25Z" fill="white"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.0833 20.5833C11.0833 19.7089 11.7922 19 12.6667 19H19C19.8745 19 20.5833 19.7089 20.5833 20.5833C20.5833 21.4578 19.8745 22.1667 19 22.1667H12.6667C11.7922 22.1667 11.0833 21.4578 11.0833 20.5833Z" fill="white"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.6394 27.6506C11.2085 27.1764 11.9259 26.9167 12.6667 26.9167H30.0833C30.9578 26.9167 31.6667 26.2078 31.6667 25.3333V9.5C31.6667 8.62555 30.9578 7.91667 30.0833 7.91667H7.91666C7.04221 7.91667 6.33332 8.62555 6.33332 9.5V31.239L10.6394 27.6506ZM12.6667 30.0833H30.0833C32.7067 30.0833 34.8333 27.9567 34.8333 25.3333V9.5C34.8333 6.87665 32.7067 4.75 30.0833 4.75H7.91666C5.2933 4.75 3.16666 6.87665 3.16666 9.5V31.239C3.16666 33.9239 6.29803 35.3905 8.36057 33.6717L12.6667 30.0833Z" fill="white"/>
                        </svg>
                    </div>
                    {/*<div className="apps"></div>*/}
                    <div></div>
                </div>
            </div>

        </>
    )
}
