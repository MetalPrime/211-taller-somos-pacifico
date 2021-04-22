import * as React from 'react';
import { getImageSrcFromUrl } from '../../utils/getImageSrcFromUrl';
import './Option.css';

interface Options {
    name?: string;
    imgElement : string;
    isSelect? : boolean;
    selected? : () => void;
}



export const Options : React.FC<Options> = ({name,imgElement,isSelect,selected}) => {
    var img = getImageSrcFromUrl(imgElement);
    console.log(isSelect);
    return(
        <button 
        onClick = {selected}
        className={isSelect?  "Options Options__isSelected" : "Options" }  >
            <img src={(img)} alt={`img`+name}/>
            
        </button>
    );
}