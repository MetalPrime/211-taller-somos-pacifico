import * as React from 'react';
import './DisplayImg.css';
import OptionNote from './optionNote.svg';
import OptionShirt from './optionShirt.svg';
import OptionThermo from './optionThermo.svg';


interface DisplayImg {
    isNone?: boolean;
}

export const DisplayImg: React.FC<DisplayImg> = ({ isNone }) => {
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

        </div>
    );
}