import * as React from 'react';
import './SelectionElements.css';
import ArrowLogo from './arrow.svg';
import { Options } from '../Options/Options';

interface SelectionElements {
    name? : string;
    displays? : boolean;
    key? : number;
    showOptions? : () => void;
    list? : {};
}

export const SelectionElements : React.FC<SelectionElements> =  ({name,displays,key,showOptions, list}) => {

    

    return (
        <div className = 'SelectionElements'>
            <section className= 'SelectionElements__display'>
            <h1>{name}</h1>
            <button onClick={showOptions}><img src={ArrowLogo} alt="btnArrow"/></button>
            </section>

            {displays && <section className= 'SelectionElements__options'>
                <Options></Options>
                <Options></Options>
                <Options></Options>
                
                </section>} 
        </div>
    );
}