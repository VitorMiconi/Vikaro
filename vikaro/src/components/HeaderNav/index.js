import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './HeaderNav.css';

const HeaderNav = () => {
    const navigate = useNavigate();

    const scrollToSection = (sectionId) => {
        navigate("/");
        

        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <nav className="flex items-center space-x-4 hidden lg:block head-nav">    
            <Link 
                to="#" 
                onClick={() => scrollToSection("projects")} 
                className="text-white font-montserrat font-light"
            >
                PROJETOS
            </Link>
            <Link 
                to="#" 
                onClick={() => scrollToSection("services")} 
                className="text-white font-lemon font-montserrat"
            >
                SERVIÇOS
            </Link>
            <Link 
                to="#" 
                onClick={() => scrollToSection("about")} 
                className="text-white font-lemon font-montserrat"
            >
                SOBRE
            </Link>
        </nav>
    );
}

export default HeaderNav;
