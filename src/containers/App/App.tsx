import React from 'react';
import './App.css';

import { HashRouter, Route, useHistory, useParams,Redirect } from 'react-router-dom';

import {Buy} from '../../components/Buy/Buy';
import { ProductContext } from '../../utils/ProductContext';
import { ProductType } from '../../utils/ProductType';
import { Creator } from '../../components/Creator/Creator';




export const App = () => {
  const [products, setProducts] = React.useState<ProductType[]>([]);
  const handleItemCreatedFinished = (newOrEditedItem : ProductType) => {
    setProducts((prev) =>{
      
      const editIndex = prev.findIndex(product => product.id === newOrEditedItem.id);
      
      if(editIndex >= 0) {
        const copy = [...prev];
        copy[editIndex] = newOrEditedItem;
        return copy;
      }

      return [...prev, newOrEditedItem];
    })
    
  }

  return (
    <main >
      <ProductContext.Provider value={{ products }}>

        <HashRouter basename={process.env.PUBLIC_URL}>


          <Route path={["/editProduct/:id","/newProduct"]}  render={()=> <Creator onFinish={handleItemCreatedFinished}></Creator> }/>

          <Route path="/recomendar" render={
            () =>
              <h1>Recomendar</h1>
          } />

          <Route path="/comprar" render={
            () =>
              <Buy 
              products={products}
              >

              </Buy>
          } />

        </HashRouter>
      </ProductContext.Provider>

    </main>
  );
}