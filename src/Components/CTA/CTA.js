import React, {useState} from "react";

import "./cta.css"
import {Modal} from "../Modal Window/Modal";
import {SingUp} from "../Form/SingUp";

export function CTA() {
    const [modalActive, setModalActive] = useState(false)

    const handleModule = () => {
        setModalActive(true)
    }
    return (
        <>
            <div className="cta">
                <div className="cta_left">
                    <p className="cta_top">"Art is not what you see, but what you feel."</p>
                    <p className="cta_bottom">Register today & start exploring the endless possiblities</p>
                </div>
                <button onClick={handleModule} className="started">Get Started</button>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <SingUp/>
            </Modal>
        </>
    )
}
