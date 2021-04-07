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
                display: false,
                indexItem : 1,
            },
            {
                imgName: "libreta",
                imgEnlace: "libreta.png",

                display: false,
                indexItem : 2,
            },
            {
                imgName: "thermos",
                imgEnlace: "thermos.png",

                display: false,
                indexItem : 3,
            },
            {
                imgName: "thermos",
                imgEnlace: "camisaBlanca.png",
                display: false,
                indexItem : 4,
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
                display: false,
                indexItem : 1,
            },
            {
                imgName: "libreta",
                imgEnlace: "libreta.png",

                display: false,
                indexItem : 2,
            },
            {
                imgName: "thermos",
                imgEnlace: "thermos.png",

                display: false,
                indexItem : 3,
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
                display: false,
                indexItem : 1,
            },
            {
                imgName: "libreta",
                imgEnlace: "/libreta.png",

                display: false,
                indexItem : 2,
            },
            {
                imgName: "thermos",
                imgEnlace: "thermos.png",

                display: false,
                indexItem : 3,
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
                display: false,
                indexItem : 1,
            },
            {
                imgName: "libreta",
                imgEnlace: "libreta.png",

                display: false,
                indexItem : 2,
            },
            {
                imgName: "thermos",
                imgEnlace: "thermos.png",

                display: false,
                indexItem : 3,
            },

        ]
    }
];

const currentPrice = 10.000;

const options = [
    {
        label: 0,
        value: 0,
    },
    {
        label: 1,
        value: 1,
    },
    {
        label: 2,
        value: 2,
    },
    {
        label: 3,
        value: 3,
    },
    {
        label: 4,
        value: 4,
    },
    {
        label: 5,
        value: 5,
    },
    {
        label: 6,
        value: 6,
    },
];

export const App = () => {

    const [displays, setDisplays] = React.useState(initialSelectors);

    const [itemSelected, setItemSelected] = React.useState("");

    const [price, setPrice] = React.useState(currentPrice);

    const [amount, setAmount] = React.useState(0);

    console.log(itemSelected);
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
                                                    setItemSelected={setItemSelected}
                                                ></SelectionElements>
                                            );
                                        }

                                        )
                                    }
                                </section>
                                <section className='App__update'>
                                    <Amount
                                        list={options}
                                        setAmount={setAmount}
                                        setPrice={setPrice}
                                        price={price}
                                    ></Amount>
                                    <Price
                                        currentPrice={price}
                                    ></Price>
                                </section>
                                <section className='App__btns'>

                                    <button className="btn btn__recommend" onClick={handleRecommend}>Recomendar</button>
                                    <button className="btn btn__buy" onClick={handleBuy}>Comprar</button>
                                </section>
                            </article>
                            <article className='App__display'>
                                <DisplayImg
                                mainItem =  {itemSelected}
                                ></DisplayImg>
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