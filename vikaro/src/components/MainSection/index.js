import React from 'react';

const MainSection = () => {
    return (
        <div className="bg-black w-full h-screen flex justify-center items-center text-white">
            <div className='flex flex-col items-center gap-8'>
                <h2 className='font-lemon text-4xl'>DESENVOLVIMENTO FRONT-END</h2>
                <div className='flex items-center gap-2'>
                    <p className='absolute ml-36 mt-40 text-4xl'>by</p>
                    <div className='flex flex-col gap-6'>
                        <h1 className='font-lemon text-center text-8xl leading'>SOLUÇÕES WEB</h1>
                        <h1 className='font-lemon text-center text-8xl leading'>VIKARO</h1>
                    </div>  
                </div>
                
            </div>
        </div>
    )
}

export default MainSection