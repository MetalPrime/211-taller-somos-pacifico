import * as React from 'react';
import './Amount.css';

interface Amount {
}

export const Amount: React.FC<Amount> = () => {
    return (
        <section className='Amount'>
            <h1>Cantidad</h1>
            <select name="amount" className='Amount__select'>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
        </section>
    );
}