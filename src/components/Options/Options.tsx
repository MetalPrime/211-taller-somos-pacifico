import * as React from 'react';
import './Option.css';

interface Options {
    name?: string;
    imgElement? : string;
    isSelect? : boolean;
}

export const Options : React.FC<Options> = ({name,imgElement,isSelect}) => {
    return(
        <div className='Options'>
            <img src={imgElement} alt={`img`+name}/>
        </div>
    );
}