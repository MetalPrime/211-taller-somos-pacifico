import React from 'react';
import './App.css';
import { DisplayImg } from '../../components/DisplayImg/DisplayImg';
import { SelectionElements } from '../../components/SelectionElements/SelectionElements';
import { BrowserRouter, Route, Router } from 'react-router-dom';

const initialSelectors = [
    {
        id: 5,
        name: 'Articulo',
        display: false,
    },
    {
        id: 2,
        name: 'Color',
        display: false,
    },
    {
        id: 3,
        name: 'Material',
        display: false,
    },
    {
        id: 4,
        name: 'Diseño',
        display: false,
    },
    {
        id: 6,
        name: 'Juanes',
        display: false,
    }
];
const initialElements = [
    {
        elemName : 'Articulo',
        index : 1,
        items : [
            {
                imgName: "camisa",
                imgEnlace: "./../src/utils/camisaBlanca.png",
            },
            {
                imgName: "libreta",
                imgEnlace: "./../src/utils/libreta.png",
            },
            {
                imgName: "thermos",
                imgEnlace: "./../src/utils/thermos.png",
            },
            {
                imgName: "thermos",
                imgEnlace: "./../src/utils/camisaBlanca.png",
            },

        ]
    },
    {
        elemName : 'Color',
        index : 2,
        items : [
            {
                imgName: "camisa",
                imgEnlace: "./../utils/camisaBlanca.png",
            },
            {
                imgName: "libreta",
                imgEnlace: "./../utils/libreta.png",
            },
            {
                imgName: "thermos",
                imgEnlace: "./../utils/thermos.png",
            },

        ]
    },
    {
        elemName : 'Material',
        index : 3,
        items : [
            {
                imgName: "camisa",
                imgEnlace: "./../utils/camisaBlanca.png",
            },
            {
                imgName: "libreta",
                imgEnlace: "./../utils/libreta.png",
            },
            {
                imgName: "thermos",
                imgEnlace: "./../utils/thermos.png",
            },

        ]
    },
    {
        elemName : 'Diseño',
        index : 4,
        items : [
            {
                imgName: "camisa",
                imgEnlace: "./../utils/camisaBlanca.png",
            },
            {
                imgName: "libreta",
                imgEnlace: "./../utils/libreta.png",
            },
            {
                imgName: "thermos",
                imgEnlace: "./../utils/thermos.png",
            },

        ]
    }
];

export const App = () => {

    const [displays, setDisplays] = React.useState(initialSelectors);

    const handleDisplay = (id: number) => {
        const copy = initialSelectors.slice();
        const index = copy.findIndex((elem) => {
            return elem.id === id;
        });
        //console.log(copy[index].display);

            if(!copy[index].display){
                copy[index].display = true;
                setDisplays(copy);
            } else {
                copy[index].display = false;
                setDisplays(copy);
            }
        
    }

    return (

        <BrowserRouter>
        <Route path="/" exact render={
            () => 
                <main className='App'>
                <article className='App__commands'>
                    <section>
                        {
                            initialSelectors.map(({id,name,display}) =>{
    
                                const showOptions = () =>{
                                    handleDisplay(id); 
                                    
                                }
    
                                return (
                                    <SelectionElements
                                    name = {name}
                                    displays = {display}
                                    key = {id}
                                    showOptions = {showOptions}
                                    list = {initialElements}
                                    ></SelectionElements>
                                );
                            }
    
                            )
                        }
                    </section>
                    <section></section>
                    <section></section>
                </article>
                <article className='App__display'>
                <DisplayImg></DisplayImg>
                </article>
    
            </main>
            
        }/>

        <Route path = "/render" render={
            () =>
           <h1>Dandole al operativo</h1>   
        }/>  

        </BrowserRouter>
        
    );
}