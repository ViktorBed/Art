import React, {useState} from "react";

import "./footer.css"
import {SingUp} from "../Form/SingUp";
import {Modal} from "../Modal Window/Modal";


export function Footer() {
    const [modalActive, setModalActive] = useState(false)

    const handleModule = () => {
        setModalActive(true)
    }

const [secondModalActive, setSecondModalActive] = useState(false)
    const handleSecondModule = () => {
        setSecondModalActive(true)
        navigator.clipboard.writeText(phone);

    }

    const phone = "067 - 3495092"
    const handleCopy = () => {
    };
    return (
        <>
            <footer>
                <section className="footer_top">
                    <h4 className="footer_h">Do you want to study art<br/> Join today</h4>
                    <button onClick={handleModule} type="button" className="request">Register & explore art</button>
                </section>
                <section className="footer_blocks">
                    <nav className="logo_block">
                        <svg width="118" height="30" viewBox="0 0 629 323" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M485.933 1.26647C485.4 1.66647 485 61.2666 485 133.533C485 277.4 484.733 271.267 493 286.867C498.467 297 512.333 310.333 522.6 315.267C536.6 322.067 543.533 323 585.933 323C619.8 323 625.133 322.733 627 320.867C628.067 319.667 628.733 317.667 628.467 316.467C628.067 315.267 626.6 309.267 625.267 303C622.2 289.4 620.6 285.933 616.067 284.2C614.067 283.533 600.067 283 584.467 283C568.867 283.133 554.333 282.6 551.933 281.8C544.067 279.4 535.8 273.8 531.8 267.933C523.667 256.067 523.667 255.667 523.667 169.4V90.9999H554.2C591.133 90.9999 589.267 91.7999 593.8 73.5332C599.667 49.9332 601.133 50.8666 557.533 51.1332L524.333 51.2666L523.933 28.8666C523.533 -0.466805 524.067 0.333195 502.333 0.333195C493.8 0.333195 486.333 0.733195 485.933 1.26647Z"
                                fill="white"/>
                            <path
                                d="M119.133 53.9333C115.8 56.9999 103.667 82.0666 103.667 85.9333C103.667 90.0666 107.267 90.7333 131 91.2661C154.067 91.6661 155.267 91.8001 161.8 95.2661C169.933 99.5331 179.8 109 185.667 118.333C188.067 121.933 208.733 167 231.667 218.333C254.6 269.667 274.2 313.267 275.4 315.267C278.867 321.133 281.933 321.667 311 321.667H338.067L342.2 318.2L346.2 314.867L346.6 218.6L347 122.333L350.067 115.533C353.933 107 362.333 98.7331 371 94.7331C377.267 91.8001 379.667 91.6661 414.733 90.9999C448.733 90.3333 452.067 90.0666 453.667 87.9333C454.6 86.5999 457 78.7333 458.867 70.5999L462.467 55.6666L459.533 53.3999C457 51.1333 453 50.9999 412.467 51.3999C375.267 51.7999 367.133 52.1999 360.467 54.1999C338.867 60.5999 322.467 73.7999 313.267 92.2001L308.333 102.2L307.667 195.4L307 288.6L287.4 244.866C276.6 220.733 261.933 188.066 254.867 172.333C247.8 156.6 237.533 133.8 232.2 121.666C205.933 63.2666 190.733 51.6666 139.667 51.1333C123.667 50.8666 122.467 51.1333 119.133 53.9333Z"
                                fill="white"/>
                            <path
                                d="M79 174.067C67.5333 178.6 58.3333 187.134 52.6 198.6C50.7333 202.067 38.0666 230.2 24.3333 261C5.80001 302.467 -0.333387 317.4 0.733313 319C1.66661 320.6 5.26661 321.134 17.4 321.4C41.4 321.934 39.2666 323.934 55.6666 286.867C83.4 223.667 86.733 217.8 96.2 213.534C101.267 211.267 105.667 211 150.333 211C200.067 211 202.333 210.734 202.333 206.067C202.333 203 189 175.8 186.733 173.934C183.667 171.667 84.867 171.8 79 174.067Z"
                                fill="white"/>
                        </svg>
                        <p className="footer_text">Based in Lviv, Ukraine, All Rights Reserved</p>
                    </nav>
                    <nav className="text_block">
                        <h4>Links</h4>
                        <a href="https://www.google.com.ua/?hl=uk" className="footer_text">Source</a>
                        <a href="https://t.me/miktorrrrr" className="footer_text">Social Media</a>
                        <a href="https://www.linkedin.com/in/viktor-bednarski-8a5b2a207/"
                           className="footer_text">Contact</a>
                    </nav>
                    <nav className="text_block">
                        <h4>Company</h4>
                        <a href="https://creativecommons.org/share-your-work/use-remix/" className="footer_text">Terms &
                            Conditions</a>
                        <a href="https://creativecommons.org/share-your-work/cclicenses/" className="footer_text">Privacy
                            Policy</a>
                        <a href="https://github.com/ViktorBed" className="footer_text">Contact</a>
                    </nav>
                    <nav className="text_block">
                        <h4>Get in touch</h4>
                        <a href="https://www.google.com/maps/place/Львів,+Львівська+область,+79000/@49.832689,24.0122355,12z/data=!3m1!4b1!4m6!3m5!1s0x473add7c09109a57:0x4223c517012378e2!8m2!3d49.839683!4d24.029717!16zL20vMGQ3X24?entry=ttu"
                           className="footer_text">Lviv, Ukraine</a>
                        <p onClick={handleSecondModule}  className="footer_text">{phone}</p>
                        <a href="mailto:vbednarskii@gmail.com" className="footer_text">vbednarskii@gmail</a>
                    </nav>
                </section>
            </footer>
            <Modal active={modalActive} setActive={setModalActive}>
                <SingUp/>
            </Modal>
            <Modal active={secondModalActive} setActive={setSecondModalActive}>
                <h3 className="h3">Copied</h3>
            </Modal>
        </>
    )
}
