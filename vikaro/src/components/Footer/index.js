const Footer = () => {
    return (
        <div className="font-lemon font-light text-white">
            <div className="text-center w-full relative pt-2">
                <h2 className="text-4xl absolute left-2/4 transform -translate-x-1/2">VIKARO</h2>
            </div>
            <div className="w-full flex justify-between items-end px-6 pb-6">
                <div>
                    <ul className="flex flex-col gap-2">
                        <a href="#tag"><li>VOLTAR AO TOPO</li></a>
                        <a href="#tag"><li>PROJETOS</li></a>
                        <a href="#tag"><li>SERVIÇOS</li></a>
                        <a href="#tag"><li>SOBRE</li></a>
                    </ul>
                </div>
                <div>
                    <ul className="flex flex-col gap-2">
                        <a href="#tag"><li>(11) 98789-9080</li></a>
                        <a href="#tag"><li>VIKAROAGENCIA@GMAIL.COM</li></a>
                    </ul>
                </div>
                <div>
                    <p>VIKARO © 2024</p>
                </div>
                <div>
                    <img src="/img/footer-star.svg" alt="Footer Star"></img>
                </div>
            </div>
        </div>
    )
}

export default Footer