import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date()); // Atualiza o estado com o horário atual
        }, 1000); // Atualiza a cada 1 segundo (1000 ms)

        return () => clearInterval(intervalId); // Limpa o intervalo quando o componente for desmontado
    }, []);

    return (
        <div>
            <h1 className='font-lemon text-white'>{time.toLocaleTimeString()}</h1> {/* Exibe o horário formatado */}
        </div>
    );
};

export default Clock;

