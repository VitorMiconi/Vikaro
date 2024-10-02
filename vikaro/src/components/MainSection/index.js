import React from 'react';
import Clock from "../Clock";
import DateComponent from "../DateComponent";

const MainSection = () => {
    return (
        <div className="bg-black w-full h-screen flex flex-col justify-end items-center text-white">
            {/* Espaço flexível acima para empurrar o conteúdo para baixo */}
            <div className="flex-grow flex flex-col items-center gap-2 sm:gap-6 justify-center">
                <img className='absolute left-0 top-40 hidden sm:block' src="/img/main-star.png" alt="Vikaro Star"></img>
                <h2 className='font-analogist text-xl sm:text-4xl'>( DESENVOLVIMENTO FRONT-END )</h2>
                <div className='flex items-center gap-2'>
                    <p className='font-analogist absolute mt-20 ml-12 sm:ml-36 sm:mt-40 text-xl sm:text-4xl'>by</p>
                    <div className='flex flex-col gap-6'>
                        <h1 className='font-lemon text-center text-4xl sm:text-8xl leading'>SOLUÇÕES WEB</h1>
                        <h1 className='font-lemon text-center text-4xl sm:text-8xl leading'>VIKARO</h1>
                    </div>
                </div>
            </div>

            {/* Relógio colado na parte inferior */}
            <div className='mb-4 flex items-center justify-between w-full px-6 py-2'>
                <DateComponent></DateComponent>
                <h2 className='font-lemon font-light hidden sm:block'>ROLE PARA BAIXO</h2>
                <Clock/>
            </div>
        </div>
    )
}

export default MainSection;
