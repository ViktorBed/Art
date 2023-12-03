import React from "react";

export function BlogContent({id, date, text, img, full}) {
    return (
        <>
            <div id={id}>
                <img src={img} alt={text}/>
                <div className="blog_block">
                    <div className="block_content">
                        <p className="time">{date}</p>
                        <p className="text">{text}
                        </p>
                    </div>
                    <nav className="time">Read Full Article</nav>
                    <section className="back">{full}</section>
                </div>
            </div>
        </>
    )
}
