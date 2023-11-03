import React, { useState} from "react";

import "./nav.css"

const handleScroll = (componentName) => {
    const component = document.getElementById(componentName);
    component.scrollIntoView({behavior: 'smooth'});
};

export function Nav() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleClick = () => {
        setToggleMenu(!toggleMenu);
    };
    return (
        <>
            <header className="nav">
                    <section className="logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="17" viewBox="0 0 64 17" fill="none">
                            <path
                                d="M16.566 7.41999V8.73999C16.566 11.0427 15.8474 12.8833 14.41 14.262C12.9874 15.626 11.176 16.308 8.97603 16.308C6.58537 16.308 4.59803 15.538 3.01403 13.998C1.4447 12.458 0.660034 10.566 0.660034 8.32199C0.660034 6.07799 1.43737 4.17866 2.99203 2.62399C4.56137 1.06933 6.47537 0.291992 8.73403 0.291992C10.1714 0.291992 11.484 0.614659 12.672 1.25999C13.8747 1.90533 14.806 2.75599 15.466 3.81199L12.474 5.52799C12.1367 4.99999 11.6307 4.56733 10.956 4.22999C10.296 3.89266 9.54803 3.72399 8.71204 3.72399C7.4067 3.72399 6.32137 4.15666 5.45603 5.02199C4.60537 5.88733 4.18003 6.99466 4.18003 8.34399C4.18003 9.67866 4.62003 10.7713 5.50003 11.622C6.38003 12.458 7.55337 12.876 9.02003 12.876C11.0587 12.876 12.3714 12.084 12.958 10.5H8.84403V7.41999H16.566Z"
                                fill="white"/>
                            <path
                                d="M24.3805 0.599992C25.8912 0.599992 27.1672 1.11333 28.2085 2.13999C29.2498 3.16666 29.7705 4.41333 29.7705 5.87999C29.7705 7.34666 29.2498 8.59333 28.2085 9.61999C27.1672 10.6467 25.8912 11.16 24.3805 11.16H22.0705V16H18.5505V0.599992H24.3805ZM24.3805 7.85999C24.9232 7.85999 25.3705 7.66933 25.7225 7.28799C26.0745 6.90666 26.2505 6.43733 26.2505 5.87999C26.2505 5.32266 26.0745 4.85333 25.7225 4.47199C25.3705 4.09066 24.9232 3.89999 24.3805 3.89999H22.0705V7.85999H24.3805Z"
                                fill="white"/>
                            <path d="M41.6522 0.599992V3.98799H37.6922V16H34.1722V3.98799H30.2122V0.599992H41.6522Z"
                                  fill="white"/>
                            <path d="M42.0974 11.006V7.83799H50.4574V11.006H42.0974Z" fill="white"/>
                            <path
                                d="M59.9394 6.84799C60.922 7.18533 61.714 7.73533 62.3154 8.49799C62.9167 9.24599 63.2174 10.1333 63.2174 11.16C63.2174 12.7733 62.6747 14.0347 61.5894 14.944C60.504 15.8533 59.1767 16.308 57.6074 16.308C56.39 16.308 55.2974 16.0293 54.3294 15.472C53.376 14.9147 52.672 14.0933 52.2174 13.008L55.2534 11.248C55.6347 12.3333 56.4194 12.876 57.6074 12.876C58.2967 12.876 58.8174 12.7147 59.1694 12.392C59.5214 12.0693 59.6974 11.6587 59.6974 11.16C59.6974 10.6613 59.5214 10.2507 59.1694 9.92799C58.8174 9.60533 58.2967 9.44399 57.6074 9.44399H56.8814L55.5394 7.44199L58.3334 3.89999H52.7014V0.599992H62.6014V3.45999L59.9394 6.84799Z"
                                fill="white"/>
                        </svg>
                    </section>
                    <section className="navigation">
                        <nav className="button" onClick={() => handleScroll('hero')}>Home</nav>
                        <nav className="button" onClick={() => handleScroll('gpt')}>What is GPT?</nav>
                        <nav className="button" onClick={() => handleScroll('feature')}>Open AI</nav>
                        <nav className="button" onClick={() => handleScroll('blog')}>Case Studies</nav>
                        <nav className="button" onClick={() => handleScroll('footer')}>Library</nav>
                    </section>
                    <section className="sing">
                        Sign in
                        <button type="button"  className="but">Sign up</button>
                    </section>
                <button type="button" onClick={handleClick} className="gpt_menu">
                    {toggleMenu
                        ? <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none">
                            <path d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none">
                            <path d="M5 17H19M5 12H19M5 7H19" stroke="white" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>}
                    {toggleMenu && (
                        <div className="gpt_menu_open">
                            <section className="navigation_menu">
                                <nav className="button_menu" onClick={() => handleScroll('hero')}>Home</nav>
                                <nav className="button_menu" onClick={() => handleScroll('gpt')}>What is GPT?</nav>
                                <nav className="button_menu" onClick={() => handleScroll('feature')}>Open AI</nav>
                                <nav className="button_menu" onClick={() => handleScroll('blog')}>Case Studies</nav>
                                <nav className="button_menu" onClick={() => handleScroll('footer')}>Library</nav>
                            </section>
                            <section className="sing_menu">
                                Sign in
                                <button type="button" className="butt">Sign up</button>
                            </section>
                        </div>
                    )}
                </button>
            </header>

        </>
    )
}
