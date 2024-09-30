import HeaderNav from "../HeaderNav"
import BorderButton from "../BorderButton"

const Header = () => {
    return (
        <header className="fixed top-0 w-full bg-black flex justify-between items-center px-6 py-2">
            <img src="/icons/vkr-logo.svg" alt="Header VKR Logo"></img>
            <HeaderNav></HeaderNav>
            <BorderButton>CONTATO</BorderButton>
        </header>
    )
        
    
}

export default Header