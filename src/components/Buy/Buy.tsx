import * as React from 'react';
import { Redirect } from 'react-router';
import { ProductType } from '../../utils/ProductType';
import './Buy.css';

interface Buy {
    products: ProductType[];
}

export const Buy: React.FC<Buy> = ({ products }) => {

    if (products.length === 0) return <Redirect to="/" />

    return (
        <section className='Buy'>
            <h1>Comprar</h1>
            <section className='Buy__Options'>
                {
                    products.map(product => {
                        return <div key={product.id}>
                            
                        </div>
                    })
                }
            </section>
        </section>
    );
}