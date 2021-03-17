import * as React from 'react';
import './SelectionElements.css';
import './arrow.svg';

interface SelectionElements {
    name? : string;
    isDisplay? : boolean;
}

export const SelectionElements : React.FC<SelectionElements> =  ({name,isDisplay}) => {

    return (
        <div className = 'SelectionElements'>
            <section className= 'SelectionElements__display'>
            <h1>{name}</h1>
            <button><img src="./arrow.svg" alt="btnArrow"/></button>
            </section>

            <section className= 'SelectionElements__options'>

            </section>
        </div>
    );
}