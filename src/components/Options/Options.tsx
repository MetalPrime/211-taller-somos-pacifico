import * as React from 'react';
import './Option.css';

interface Options {
    name?: string;
    imgElement? : string;
    isSelect? : boolean;
    selected? : () => void;
}

export const Options : React.FC<Options> = ({name,imgElement,isSelect,selected}) => {
    return(
        <button 
        onClick = {selected}
        className={`Options ${isSelect&&'Options__isSelected'}`}  >
            <img src={imgElement} alt={`img`+name}/>
            {isSelect && <img></img>}
        </button>
    );
}