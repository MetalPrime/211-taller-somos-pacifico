import React from 'react';
import {ProductType} from './ProductType';

export const ProductContext = React.createContext({
    products : [] as ProductType[],
})