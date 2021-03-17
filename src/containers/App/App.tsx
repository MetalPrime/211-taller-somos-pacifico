import React from 'react';
import './App.css';
import { DisplayImg } from '../../components/DisplayImg/DisplayImg';
import { SelectionElements } from '../../components/SelectionElements/SelectionElements';

export const App = () => {
    return (
        <main className='App'>
            <article className='App__commands'>
                <section>
                    <SelectionElements name = {'Articulo'} isDisplay= {false}/>
                    <SelectionElements name = {'Color'} isDisplay= {false}/>
                    <SelectionElements name = {'Material'} isDisplay = {false} />
                    <SelectionElements name = {'Diseño'} isDisplay = {false} />
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