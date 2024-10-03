
import HeaderNav from "../HeaderNav"
import BorderButton from "../BorderButton"
import HamburguerMenu from "../HamburguerMenu"


const Header = () => {
    return (
        <header className="fixed top-0 w-full bg-black flex justify-between items-center px-6 py-2 z-10">
            <a href="tag" className="z-50"><img src="/icons/vkr-logo.svg" alt="Header VKR Logo"></img></a>
            <HeaderNav/>
            <HamburguerMenu></HamburguerMenu>
            <BorderButton realDisplay={'hidden'} smDisplay={'sm:block'} >CONTATO</BorderButton>

        </header>
    )
        
    
}

export default Header