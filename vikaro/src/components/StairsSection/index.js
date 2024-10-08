

const StairsSection = () => {
    return (
        <div className="text-white w-full lg:h-screen px-6 flex pb-6 bg-none lg:bg-custom-stairs bg-no-repeat bg-cover flex flex-col items-center  gap-4 lg:gap-0" data-aos="fade-up">
            <img className="flex lg:hidden" src="../img/stairs.png" alt="Stairs Eleve"></img>
            <div className="flex flex-col gap-2 h-3/4  lg:justify-center">
                <h2 className="font-lemon font-medium text-6xl">ELEVE</h2>
                <p className="font-montserrat text-center">SEU NEGÓCIO AO <br></br><strong>PRÓXIMO NÍVEL</strong></p>
            </div>
        </div>
    )
}

export default StairsSection