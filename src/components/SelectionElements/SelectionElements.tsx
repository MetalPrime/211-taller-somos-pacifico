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
    setItemSelected: React.Dispatch<React.SetStateAction<string>>;
}

interface OptionsElements {
    elemName: string;
    index: number;
    items: ItemsElements[];
}

interface ItemsElements {
    imgName: string;
    imgEnlace: string;
    display : boolean;
    indexItem: number;
}

export const SelectionElements: React.FC<SelectionElements> = ({ name, displays, id, showOptions, list, setItemSelected }) => {

    const [selected, setSelected] = React.useState(list);

    const handleSelected = (id : number, idtems : number) => {
        const copy = list.slice();
        const index = copy.findIndex(elem =>{
            return elem.index === id;
        });

        const itemscopy = copy[index].items;
        const indexItem = itemscopy.findIndex(elem =>{
            return elem.indexItem === idtems;
        });

        if (!itemscopy[indexItem].display) {
            itemscopy[indexItem].display = true;
            setSelected(copy);
            setItemSelected(itemscopy[indexItem].imgName);
        } else {
            itemscopy[indexItem].display = false;
            setSelected(copy);
        }
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
                                items.map(({ imgName, imgEnlace, display, indexItem }) => {

                                    const showPossibilities = () => {
                                        handleSelected(index,indexItem);

                                    }

                                    return (
                                        <Options
                                        name={imgName}
                                        imgElement={imgEnlace}
                                        isSelect = {display}
                                        selected = {showPossibilities}
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