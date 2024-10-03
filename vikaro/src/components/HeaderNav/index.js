import './HeaderNav.css'

const HeaderNav = () => {
    return (
        <nav className="flex items-center space-x-4 hidden lg:block head-nav">    
            <a href="#projetos" className="text-white font-montserrat font-light">PROJETOS</a>
            <a href="#servicos" className="text-white font-lemon font-montserrat">SERVIÇOS</a>
            <a href="#sobre" className="text-white font-lemon font-montserrat">SOBRE</a>
        </nav>
    );
}

export default HeaderNav;
