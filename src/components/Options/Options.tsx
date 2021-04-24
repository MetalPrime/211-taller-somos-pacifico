import * as React from 'react';
import { getImageSrcFromUrl } from '../../utils/getImageSrcFromUrl';
import './Option.css';

interface Options {
    name?: string;
    imgElement: string;
    isSelect?: boolean;
    selected?: () => void;
    kindItem: 'Diseño' | 'Material' | 'Color' | 'Articulo';
}



export const Options: React.FC<Options> = ({ name, imgElement, isSelect, selected, kindItem }) => {
    var img = getImageSrcFromUrl(imgElement);

    if(kindItem === 'Color'){
        console.log(img)
    }
    return (
        <button
            onClick={selected}
            className={isSelect ? "Options Options__isSelected" : "Options"}  >

            {
                kindItem === 'Color'? <div style={{backgroundColor: imgElement, width: '80%', height: '70%'}}></div> : <img src={img} alt=""/>
            }



        </button>
    );
}