import * as React from 'react';
import { getImageSrcFromUrl } from '../../utils/getImageSrcFromUrl';
import './DisplayImg.css';
import OptionNote from './optionNote.svg';
import OptionShirt from './optionShirt.svg';
import OptionThermo from './optionThermo.svg';


interface DisplayImg {
    isNone?: boolean;
    mainItemType : null | string | undefined;
    mainItemColor : null |string | undefined;
    mainItemMaterial : null |string | undefined;
    mainItemDesign : null |string | undefined;
}


export const DisplayImg: React.FC<DisplayImg> = ({ isNone, mainItemColor, mainItemDesign, mainItemMaterial, mainItemType }) => {

    console.log(mainItemType);
    if(mainItemColor === null && mainItemDesign === null && mainItemMaterial === null && mainItemType === null){
        isNone = false;
    } else {
        isNone = true;
    }

    return (
        <div className='DisplayImg'>
            {
                !isNone &&
                <section className='DisplayImg__section'>
                    <h1>Busca y Personaliza tu objeto deseado en el panel de la izquierda</h1>
                    <section>
                        <img src={OptionNote} alt="OptionNote" />
                        <img src={OptionShirt} alt="OptionShirt" />
                        <img src={OptionThermo} alt="OptionThermo" />
                    </section>
                </section>

            }

            {
                isNone && 
                <section className='DisplayImg__imgs'>
                <img src={mainItemType==null? undefined : getImageSrcFromUrl(mainItemType) } alt={mainItemType==null? undefined : mainItemType} className="DisplayImg__img"/>
                <img src={mainItemMaterial==null? undefined : getImageSrcFromUrl(mainItemMaterial) } alt={mainItemMaterial==null? undefined : mainItemMaterial} className="DisplayImg__img"/>
                <img src={mainItemColor==null? undefined : getImageSrcFromUrl(mainItemColor) } alt={mainItemColor==null? undefined : mainItemColor} className="DisplayImg__img" style={{mixBlendMode : 'hard-light'}}/>
                <img src={mainItemDesign==null? undefined : getImageSrcFromUrl(mainItemDesign) } alt={mainItemDesign==null? undefined : mainItemDesign} className="DisplayImg__img"/>
                
                
                </section>
            }

        </div>
    );
}