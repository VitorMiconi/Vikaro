import React from 'react';
import Clock from "../Clock"

const MainSection = () => {
    return (
        <div className="bg-black w-full h-screen flex flex-col justify-end items-center text-white">
            {/* Espaço flexível acima para empurrar o conteúdo para baixo */}
            <div className="flex-grow flex flex-col items-center gap-6 justify-center">
                <img className='absolute left-0 top-40' src="/img/main-star.png" alt="Vikaro Star"></img>
                <h2 className='font-analogist text-4xl'>( DESENVOLVIMENTO FRONT-END )</h2>
                <div className='flex items-center gap-2'>
                    <p className='font-analogist absolute ml-36 mt-40 text-4xl'>by</p>
                    <div className='flex flex-col gap-6'>
                        <h1 className='font-lemon text-center text-8xl leading'>SOLUÇÕES WEB</h1>
                        <h1 className='font-lemon text-center text-8xl leading'>VIKARO</h1>
                    </div>
                </div>
            </div>

            {/* Relógio colado na parte inferior */}
            <div className='mb-4 flex items-center justify-between w-full px-6 py-2'>
                <Clock/>
                <h2 className='font-lemon font-light'>ROLE PARA BAIXO</h2>
                <Clock/>
            </div>
        </div>
    )
}

export default MainSection;
