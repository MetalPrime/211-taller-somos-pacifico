import * as React from 'react';
import './DisplayImg.css';
import OptionNote from './optionNote.svg';
import OptionShirt from './optionShirt.svg';
import OptionThermo from './optionThermo.svg';


interface DisplayImg {
    isNone?: boolean;
    mainItemType : null | string;
    mainItemColor : null |string;
    mainItemMaterial : null |string;
    mainItemDesign : null |string;

}


export const DisplayImg: React.FC<DisplayImg> = ({ isNone, mainItemColor, mainItemDesign, mainItemMaterial, mainItemType }) => {

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
                <img src={mainItemColor==null? undefined : mainItemColor} alt="" className="DisplayImg__img"/>
                <img src={mainItemDesign==null? undefined : mainItemDesign} alt="" className="DisplayImg__img"/>
                <img src={mainItemMaterial==null? undefined : mainItemMaterial} alt="" className="DisplayImg__img"/>
                <img src={mainItemType==null? undefined : mainItemType} alt="" className="DisplayImg__img"/>
                </section>
            }

        </div>
    );
}