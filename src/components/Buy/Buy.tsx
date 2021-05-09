import * as React from 'react';
import { Redirect } from 'react-router';
import { ProductType } from '../../utils/ProductType';
import { SaveItem } from '../SaveItem/SaveItem';
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
                        return <div>
                            <SaveItem
                            price={product.price}
                            setConfigColorImage={product.setConfigColorImage}
                            setConfigColorPrice={product.setConfigColorPrice}
                            setConfigDesignImage={product.setConfigDesignImage}
                            setConfigDesignPrice={product.setConfigDesignPrice}
                            setConfigMaterialImage={product.setConfigMaterialImage}
                            setConfigMaterialPrice={product.setConfigMaterialPrice}
                            setConfigTypeImage={product.setConfigTypeImage}
                            setConfigTypePrice={product.setConfigTypePrice}
                            id={product.id}
                            >

                            </SaveItem>
                        </div>
                    })
                }
            </section>
        </section>
    );
}