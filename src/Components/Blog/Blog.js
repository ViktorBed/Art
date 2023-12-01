import React from "react";

import Sebra from "../../photos/Sebra.svg"
import Charrette from "../../photos/Charrette.svg"
import House from "../../photos/house.svg"
import Ascendic from "../../photos/Ascendic.png"
import Marige from "../../photos/marige.svg"
import "./blog.css"
import {BlogContent} from "./BlogContent";

const BlogData = [
    {
        id: 'one',
        img: Sebra,
        text: 'Zebra (1937) by Victor Vasarely',
        full: 'Vasarely delivered one of the most important pieces of his career when he created Zebra, a painting inscribed in Op-art movement. The first version of this artwork had been made 30 years before the Op-art concept was conceived; however, it is considered to be a part of this movement. The last version of Zebra was created in 1965.'
    },
    {
        id: 'two',
        img: Charrette,
        text: 'Cart with Black Ox (1884) by Vincent van Gogh',
        full: 'Created in the village of Nuenen before Van Gogh went to the South of France, the painting has a dark palette and has been described as "disquieting" the ox and cart are both decrepit.'
    },
    {
        id: 'three',
        img: House,
        text: 'The Charnel House (1945) by Picasso',
        full: 'This painting is considered to be an anti-war statement, yet Picasso was largely apolitical until the Spanish Civil War. His art dealer Daniel-Henry Kahnweiler said that he had been the "most apolitical man" he had ever known.'
    },
    {
        id: 'four',
        img: Ascendic,
        text: 'Ascending and Descending (1960) by M.C. Escher',
        full: 'The structure is embedded in human activity. By showing an unaccountable ritual of what Escher calls an unknown sect, Escher has added an air of mystery to the people who ascend and descend the stairs.'
    },
    {
        id: 'five',
        img: Marige,
        text: 'The Marriage of Reason and Squalor (1959) by Frank Stella',
        full: 'The Black Paintings reflect Stella’s desire to present the viewer with an immediate visual impact, devoid of references to anything outside the work itself.'
    },
];

export function Blog({id, date, text, img, arc}) {
    return (
        <>
            <div className="blog">
                <h1>Known works of outstanding artists</h1>
                <div className="blog_windows">
                    {BlogData.map((item, index) => (
                        <BlogContent img={item.img} title={item.title} text={item.text} full={item.full} key={item.id}
                                     id={item.id}/>
                    ))}
                </div>
            </div>
        </>
    )
}
