import React from "react";

import "./modal.css"

export function Modal({active, setActive, children}) {

    const handleClose = () => {
        setActive(false);
    }
        if (active) {
            document.body.style.overflow = "clip";
        } else {
            document.body.style.overflow = "auto";
        }
    if (document.querySelector(".responsive_nav")) {
        document.body.style.overflow = "clip";
    }
    return (
        <>
            <section className={active ? "modal active" : "modal"}>
                <div className={active ? "content active" : "content"} onClick={e => e.stopPropagation()}>
                    <svg className="cross" onClick={handleClose} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24" fill="none">
                        <path d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#181818" strokeWidth="2"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {children}
                </div>
            </section>
        </>
    )
}
