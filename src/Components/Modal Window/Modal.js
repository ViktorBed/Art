import React from "react";

import "./modal.css"

export function Modal({active, setActive, children}) {
    return (
        <>
            <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
                <div className={active ? "content active" : "content"} onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </>
    )
}
