import { useState, useEffect } from "react";
import HeaderNav from "../HeaderNav";
import BorderButton from "../BorderButton";
import HamburguerMenu from "../HamburguerMenu";

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    let lastScrollY = 0;

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            // Scrolling down
            setIsVisible(false);
        } else {
            // Scrolling up
            setIsVisible(true);
        }

        lastScrollY = currentScrollY;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 w-full bg-black flex justify-between items-center px-6 py-2 z-10 transition-transform duration-1000 ${
                isVisible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <a href="#main-section" className="z-50">
                <img src="/icons/vkr-logo.svg" alt="Header VKR Logo" />
            </a>
            <HeaderNav />
            <HamburguerMenu />
            <BorderButton realDisplay={'hidden'} smDisplay={'lg:block'} hrefLink={'#footer'}>
                CONTATO
            </BorderButton>
        </header>
    );
};

export default Header;
