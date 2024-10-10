const Footer = () => {
    return (
        <div className="font-lemon font-light text-white flex flex-col gap-6" id="footer">
            <div className="text-center w-full relative pt-14" >
                <h2 className="text-4xl block lg:absolute lg:left-2/4 lg:transform lg:-translate-x-1/2">VIKARO</h2>
            </div>
            <div className="w-full flex flex-col lg:flex-row justify-between lg:items-end px-6 py-8 lg:py-0 lg:pb-8 gap-6">
                <div>
                    <ul className="flex flex-col gap-2 items-start">
                        <a href="#main-section"><li>VOLTAR AO TOPO</li></a>
                        <a href="#projects"><li>PROJETOS</li></a>
                        <a href="#services"><li>SERVIÇOS</li></a>
                        <a href="#about"><li>SOBRE</li></a>
                    </ul>
                </div>
                <div>
                    <ul className="flex flex-col gap-2 items-start">
                        <a href="tel:+5511999999999"><li>(11) 98789-9080</li></a>
                        <a href="https://www.instagram.com/agenciavikaro?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><li>@agenciavikaro</li></a>
                        <a href="mailto:agenciavikaro@gmail.com"><li>VIKAROAGENCIA@GMAIL.COM</li></a>
                    </ul>
                </div>
                <div className="flex justify-center lg:justify-start">
                    <p>VIKARO © 2024</p>
                </div>
                <div className="flex justify-center lg:justify-start">
                    <img src="/img/footer-star.svg" alt="Footer Star"></img>
                </div>
            </div>
        </div>
    )
}

export default Footer