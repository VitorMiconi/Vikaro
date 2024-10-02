

const StairsSection = () => {
    return (
        <div className="text-white w-full sm:h-screen px-6 flex pb-6 bg-none sm:bg-custom-stairs bg-no-repeat bg-cover flex flex-col items-center  gap-4 sm:gap-0">
            <img className="flex sm:hidden" src="../img/stairs.png"></img>
            <div className="flex flex-col gap-2 h-3/4  sm:justify-center">
                <h2 className="font-lemon font-medium text-6xl">ELEVE</h2>
                <p className="font-montserrat text-center">SEU NEGÓCIO AO <br></br><strong>PRÓXIMO NÍVEL</strong></p>
            </div>
        </div>
    )
}

export default StairsSection