import HeaderNav from "../HeaderNav"
import BorderButton from "../BorderButton"

const Header = () => {
    return (
        <header className="fixed top-0 w-full bg-black flex justify-between items-center px-6 py-2 z-10">
            <a href="tag"><img src="/icons/vkr-logo.svg" alt="Header VKR Logo"></img></a>
            <HeaderNav/>
            <BorderButton>CONTATO</BorderButton>
        </header>
    )
        
    
}

export default Header