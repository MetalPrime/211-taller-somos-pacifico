import * as React from 'react';
import './Option.css';

interface Options {
    name?: string;
    imgElement? : string;
    isSelect? : boolean;
    selected? : () => void;
}

export const Options : React.FC<Options> = ({name,imgElement,isSelect,selected}) => {
    console.log("vivo")

    

    return(
        <button 
        onClick = {selected}
        className={isSelect?  "Options Options__isSelected" : "Options" }  >
            <img src={imgElement} alt={`img`+name}/>
            
        </button>
    );
}