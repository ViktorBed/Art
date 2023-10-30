import React from "react";

import "./blog.css"
import blog1 from "../../photos/blog1.svg"
import blog2 from "../../photos/blog2.svg"
import blog3 from "../../photos/blog3.svg"
import blog4 from "../../photos/blog4.svg"
import blog5 from "../../photos/blog5.svg"

export function Blog() {
    return (
        <>
            <div className="blog">
                <h1>A lot is happening,
                    We are blogging about it.</h1>
                <div className="blog_windows">
                    <div className="blog_left">
                        <img src={blog1} alt="Code tunel"/>
                        <div className="blog_block">
                            <div className="block_content">
                                <div className="time">Sep 26, 2021</div>
                                <div className="text">GPT-3 and Open AI is the future. Let us explore how it is?</div>
                            </div>
                            <div className="time">Read Full Article</div>
                        </div>
                    </div>
                    <div className="blog_mid">
                        <div className="block_top">
                            <img src={blog2} alt="Code tunel"/>
                            <div className="blog_block_small">
                                <div className="block_content_small">
                                    <div className="time">Sep 26, 2021</div>
                                    <div className="text">GPT-3 and Open  AI is the future. Let us explore how it is?
                                    </div>
                                </div>
                                <div className="time">Read Full Article</div>
                            </div>
                        </div>
                        <div className="block_top">
                            <img src={blog3} alt="Code tunel"/>
                            <div className="blog_block_small">
                                <div className="block_content">
                                    <div className="time">Sep 26, 2021</div>
                                    <div className="text">GPT-3 and Open  AI is the future. Let us explore how it is?
                                    </div>
                                </div>
                                <div className="time">Read Full Article</div>
                            </div>
                        </div>
                    </div>

                    <div className="blog_mid">
                        <div className="block_top">
                            <img src={blog4} alt="Code tunel"/>
                            <div className="blog_block_small">
                                <div className="block_content_small">
                                    <div className="time">Sep 26, 2021</div>
                                    <div className="text">GPT-3 and Open AI is the future. Let us explore how it is?
                                    </div>
                                </div>
                                <div className="time">Read Full Article</div>
                            </div>
                        </div>
                        <div className="block_top">
                            <img src={blog5} alt="Code tunel"/>
                            <div className="blog_block_small">
                                <div className="block_content">
                                    <div className="time">Sep 26, 2021</div>
                                    <div className="text">GPT-3 and Open AI is the future. Let us explore how it is?
                                    </div>
                                </div>
                                <div className="time">Read Full Article</div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
