const Footer = () => {
    return (
        <div className="font-lemon font-light text-white flex flex-col gap-6">
            <div className="text-center w-full relative pt-6">
                <h2 className="text-4xl block sm:absolute sm:left-2/4 sm:transform sm:-translate-x-1/2">VIKARO</h2>
            </div>
            <div className="w-full flex flex-col sm:flex-row justify-between sm:items-end px-6 py-8 sm:py-0 sm:pb-8 gap-6">
                <div>
                    <ul className="flex flex-col gap-2 items-start">
                        <a href="#tag"><li>VOLTAR AO TOPO</li></a>
                        <a href="#tag"><li>PROJETOS</li></a>
                        <a href="#tag"><li>SERVIÇOS</li></a>
                        <a href="#tag"><li>SOBRE</li></a>
                    </ul>
                </div>
                <div>
                    <ul className="flex flex-col gap-2 items-start">
                        <a href="#tag"><li>(11) 98789-9080</li></a>
                        <a href="#tag"><li>VIKAROAGENCIA@GMAIL.COM</li></a>
                    </ul>
                </div>
                <div className="flex justify-center sm:justify-start">
                    <p>VIKARO © 2024</p>
                </div>
                <div className="flex justify-center sm:justify-start">
                    <img src="/img/footer-star.svg" alt="Footer Star"></img>
                </div>
            </div>
        </div>
    )
}

export default Footer