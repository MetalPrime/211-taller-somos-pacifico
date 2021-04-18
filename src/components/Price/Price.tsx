import * as React from 'react';
import './Price.css';

interface Price {
    currentPrice?: number,
}

export const Price: React.FC<Price> = ({ currentPrice }) => {
    return (
        <section className='Precio'>
            <h1>Precio</h1>
            <p>{`$ ${currentPrice===undefined? 0.00  : currentPrice} .000`}</p>
        </section>
    );
}