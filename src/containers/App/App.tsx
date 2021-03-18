import React from 'react';
import './App.css';
import { DisplayImg } from '../../components/DisplayImg/DisplayImg';
import { SelectionElements } from '../../components/SelectionElements/SelectionElements';

const initialElements = [
    {
        elemName : 'Articulo',
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
   
];

export const App = () => {

    const [displays, setDisplays] = React.useState(false);


    return (
        <main className='App'>
            <article className='App__commands'>
                <section>
                    <SelectionElements name = {'Articulo'}   displays= {displays} setDisplays = {setDisplays}/>
                    <SelectionElements name = {'Color'}  displays= {displays} setDisplays = {setDisplays}/>
                    <SelectionElements name = {'Material'}  displays = {displays}  setDisplays = {setDisplays}/>
                    <SelectionElements name = {'Diseño'}  displays = {displays} setDisplays = {setDisplays} />
                </section>
                <section></section>
                <section></section>
            </article>
            <article className='App__display'>
            <DisplayImg></DisplayImg>
            </article>

        </main>
    );
}