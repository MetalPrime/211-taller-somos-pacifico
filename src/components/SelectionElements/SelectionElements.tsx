import * as React from 'react';
import './SelectionElements.css';
import ArrowLogo from './arrow.svg';
import { Options } from '../Options/Options';

interface SelectionElements {
    name?: string;
    displays?: boolean;
    id?: number;
    showOptions?: () => void;
    list: OptionsElements[];
}

interface OptionsElements {
    elemName: string;
    index: number;
    items: ItemsElements[];
}

interface ItemsElements {
    imgName: string;
    imgEnlace: string;
}

export const SelectionElements: React.FC<SelectionElements> = ({ name, displays, id, showOptions, list }) => {

    const [selected, setSelected] = React.useState(list);

    const handleSelected = (id : number) => {
        const copy = list.slice();
        const index = copy.findIndex(elem =>{
            return elem.index === id;
        });
    }

    return (
        <div className='SelectionElements'>
            <section className='SelectionElements__display'>
                <h1>{name}</h1>
                <button onClick={showOptions}><img src={ArrowLogo} alt="btnArrow" className={displays ? "SelectionElements__display--btn" : "SelectionElements__display--btnNo"} /></button>
            </section>

            {displays && <section className='SelectionElements__options'>
                
                {
                    list.map(({ elemName, index, items }) => {
                        //console.log(name +" " + elemName)

                        if (elemName === name) {
                            return(
                                items.map(({ imgName, imgEnlace }) => {

                                    return (
                                        <Options
                                        name={imgName}
                                        imgElement={imgEnlace}
                                        ></Options>
                                        );
                                }
                            )

                            );
                        }
                    }
                    )
                }
                
                
            </section>}
        </div>
    );
}