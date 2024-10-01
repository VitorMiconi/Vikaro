import React from 'react';

const DateComponent = () => {
    const currentDate = new Date();

    // Define um array para os meses abreviados em português
    const months = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];

    // Extrai o mês e o ano da data atual
    const month = months[currentDate.getMonth()]; // Obtém o mês atual (0-11)
    const year = currentDate.getFullYear(); // Obtém o ano

    return (
        <div>
            <p className='font-lemon font-light'>{month}, {year}</p> {/* Exibe a data formatada */}
        </div>
    );
};

export default DateComponent;
