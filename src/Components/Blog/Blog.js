import React from "react";

import blog1 from "../../photos/blog1.svg"
import blog2 from "../../photos/blog2.svg"
import blog3 from "../../photos/blog3.svg"
import blog4 from "../../photos/blog4.svg"
import blog5 from "../../photos/blog5.svg"
import "./blog.css"
import {BlogContent} from "./BlogContent";

const BlogData = [
    {
        id: 'one',
        img: blog1,
        date: 'Sep 26, 2023',
        text: 'GPT-3 and Open AI is the future. Let us explore how it is?',
    },
    {
        id: 'two',
        img: blog2,
        date: 'Aug 17, 2023',
        text: 'GPT-3 and Open AI is the future. Let us explore how it is?',
    },
    {
        id: 'three',
        img: blog3,
        date: 'Sep 12, 2022',
        text: 'GPT-3 and Open AI is the future. Let us explore how it is?',
    },
    {
        id: 'four',
        img: blog4,
        date: 'Feb 30, 2023',
        text: 'GPT-3 and Open AI is the future. Let us explore how it is?',
    },
    {
        id: 'five',
        img: blog5,
        date: 'Mar 26, 2022',
        text: 'GPT-3 and Open AI is the future. Let us explore how it is?',
    },
];

export function Blog({id,date, text, img, arc}) {
    return (
        <>
            <div className="blog">
                <h1>A lot is happening,
                    We are blogging about it.</h1>
                <div className="blog_windows">
                        {BlogData.map((item, index) => (
                            <BlogContent img={item.img} title={item.title} text={item.text} id={item.id}/>
                        ))}
                </div>
            </div>
        </>
    )
}
