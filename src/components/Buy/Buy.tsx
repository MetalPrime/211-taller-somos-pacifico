import * as React from 'react';
import { Redirect, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { ProductType } from '../../utils/ProductType';
import { SaveItem } from '../SaveItem/SaveItem';
import './Buy.css';

interface Buy {
    products: ProductType[];
}

export const Buy: React.FC<Buy> = ({ products }) => {

    if (products.length === 0) return <Redirect to="/newProduct" />

    return (
        <section className='Buy'>
            <h1>Comprar</h1>
            <Link to='/newProduct'>Crear nuevo elemento</Link> 
            <section className='Buy__Options'>
                {
                    products.map(product => {
                        return <div key={product.id}>
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
                            <Link to={`/editProduct/${product.id}`}>Editar producto</Link>
                        </div>
                    })
                }
                        
            </section>
        </section>
    );
}