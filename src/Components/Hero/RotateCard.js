import {useEffect, useRef, useState} from "react";

export const RotateCard = () => {
    const cardRef = useRef(null);
    const [tilt, setTilt] = useState({tiltX: 0, tiltY: 0});

    useEffect(() => {
        const handleMouseMove = (e) => {
            const card = cardRef.current;
            const rect = card.getBoundingClientRect();
            const cardPositionX = rect.left + rect.width / 2;
            const cardPositionY = rect.top + rect.height / 2;
            const tiltX = -(e.clientX - cardPositionX) / (rect.width / 15);
            const tiltY = -(e.clientY - cardPositionY) / (rect.height / 15);
            setTilt({tiltX, tiltY});
        };

        const handleMouseEnter = () => {
            document.addEventListener('mousemove', handleMouseMove);
        };

        const handleMouseLeave = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            setTilt({tiltX: 0, tiltY: 0});
        };

        const card = cardRef.current;
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mouseenter', handleMouseEnter);
            card.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


    return (
        <>
            <div id="card" ref={cardRef}
                 style={{transform: `perspective(700px) rotateX(${tilt.tiltY}deg) rotateY(${tilt.tiltX}deg)`}}></div>
        </>
    );
};
