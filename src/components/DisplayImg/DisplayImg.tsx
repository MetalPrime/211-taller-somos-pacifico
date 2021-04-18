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


    console.log(mainItemColor);
    console.log(mainItemDesign);
    console.log(mainItemMaterial);
    console.log(mainItemType);
    
    if(mainItemColor === null && mainItemDesign === null && mainItemMaterial === null && mainItemType === null){
        isNone = false;
        console.log("true");
    } else {
        isNone = true;
        console.log("False");
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
                <section>
                <h1>{mainItemColor}</h1>
                <h1>{mainItemDesign}</h1>
                <h1>{mainItemMaterial}</h1>
                <h1>{mainItemType}</h1>
                </section>
            }

        </div>
    );
}