import React from 'react';
import './App.css';
import { DisplayImg } from '../../components/DisplayImg/DisplayImg';
import { SelectionElements } from '../../components/SelectionElements/SelectionElements';
import { BrowserRouter, HashRouter, Redirect, Route, Router, useHistory, Link } from 'react-router-dom';
import { Amount } from '../../components/Amount/Amount';
import { Price } from '../../components/Price/Price';

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
        elemName: 'Articulo',
        index: 1,
        items: [
            {
                imgName: "camisa",
                imgEnlace: "camisaBlanca.png",
            },
            {
                imgName: "libreta",
                imgEnlace: "libreta.png",
            },
            {
                imgName: "thermos",
                imgEnlace: "thermos.png",
            },
            {
                imgName: "thermos",
                imgEnlace: "camisaBlanca.png",
            },

        ]
    },
    {
        elemName: 'Color',
        index: 2,
        items: [
            {
                imgName: "camisa",
                imgEnlace: "camisaBlanca.png",
            },
            {
                imgName: "libreta",
                imgEnlace: "libreta.png",
            },
            {
                imgName: "thermos",
                imgEnlace: "thermos.png",
            },

        ]
    },
    {
        elemName: 'Material',
        index: 3,
        items: [
            {
                imgName: "camisa",
                imgEnlace: "camisaBlanca.png",
            },
            {
                imgName: "libreta",
                imgEnlace: "/libreta.png",
            },
            {
                imgName: "thermos",
                imgEnlace: "thermos.png",
            },

        ]
    },
    {
        elemName: 'Diseño',
        index: 4,
        items: [
            {
                imgName: "camisa",
                imgEnlace: "camisaBlanca.png",
            },
            {
                imgName: "libreta",
                imgEnlace: "libreta.png",
            },
            {
                imgName: "thermos",
                imgEnlace: "thermos.png",
            },

        ]
    }
];

export const App = () => {

    const [displays, setDisplays] = React.useState(initialSelectors);

    const history = useHistory();

    const handleDisplay = (id: number) => {
        const copy = initialSelectors.slice();
        const index = copy.findIndex((elem) => {
            return elem.id === id;
        });
        //console.log(copy[index].display);

        if (!copy[index].display) {
            copy[index].display = true;
            setDisplays(copy);
        } else {
            copy[index].display = false;
            setDisplays(copy);
        }

    }


    const handleBuy = () => {
        history.push('/comprar');
    }

    const handleRecommend = () => {
        history.push('/recomendar');
    }

    return (
        <main >
            <HashRouter basename={process.env.PUBLIC_URL}>


                <Route path="/" exact render={
                    () =>
                        <section className='App'>
                            <article className='App__commands'>
                                <section >
                                    {
                                        initialSelectors.map(({ id, name, display }) => {

                                            const showOptions = () => {
                                                handleDisplay(id);

                                            }

                                            return (
                                                <SelectionElements
                                                    name={name}
                                                    displays={display}
                                                    key={id}
                                                    showOptions={showOptions}
                                                    list={initialElements}
                                                ></SelectionElements>
                                            );
                                        }

                                        )
                                    }
                                </section>
                                <section className='App__update'>
                                    <Amount></Amount>
                                    <Price></Price>
                                </section>
                                <section className='App__btns'>

                                    <button className="btn btn__recommend" onClick={handleRecommend}>Recomendar</button>
                                    <button className="btn btn__buy" onClick={handleBuy}>Comprar</button>
                                </section>
                            </article>
                            <article className='App__display'>
                                <DisplayImg></DisplayImg>
                            </article>
                        </section>


                } />

                <Route path="/recomendar" render={
                    () =>
                        <h1>Recomendar</h1>
                } />

                <Route path="/comprar" render={
                    () =>
                        <h1>Comprar</h1>
                } />

            </HashRouter>
        </main>
    );
}