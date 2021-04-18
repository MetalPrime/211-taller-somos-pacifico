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
    config: Configuration;
    setConfig: React.Dispatch<React.SetStateAction<Configuration>>;
    price: Price;
    setPrice : React.Dispatch<React.SetStateAction<Price>>;

}

interface OptionsElements {
    name: string;
    img: string;
    price: number;
    colors: ItemsElements[];
    materials: ItemsElements[];
    design: ItemsElements[];
}

interface ItemsElements {
    name: string;
    img: string;
    price: number;
}

interface Configuration {
    type: string | null;
    color: string | null;
    material: string | null;
    design: string | null;
}

interface Price {
    typePrice: number | null;
    colorPrice: number | null;
    materialPrice: number | null;
    designPrice: number | null;
}

export const SelectionElements: React.FC<SelectionElements> = ({ name, displays,  showOptions, list, config, setConfig, price, setPrice }) => {

    // const [selected, setSelected] = React.useState(list);

    // const handleSelected = (id : number, idtems : number) => {
    //     const copy = list.slice();
    //     const index = copy.findIndex(elem =>{
    //         return elem.index === id;
    //     });

    //     const itemscopy = copy[index].items;
    //     const indexItem = itemscopy.findIndex(elem =>{
    //         return elem.indexItem === idtems;
    //     });

    //     if (!itemscopy[indexItem].display) {
    //         copy.forEach(elem => {
    //             elem.items.forEach(inner => {
    //                 inner.display = false;
    //             });
    //         });
    //         itemscopy[indexItem].display = true;
    //         setSelected(copy);
    //         setItemSelected(itemscopy[indexItem]);

    //     } else {
    //         itemscopy[indexItem].display = false;
    //         setSelected(copy);
    //     }
    // }
    const selectedArticleType = list.find(article => {
        return article.name === config.type
    });

    return (
        <div className='SelectionElements'>
            <section className='SelectionElements__display'>
                <h1>{name}</h1>
                <button onClick={showOptions}><img src={ArrowLogo} alt="btnArrow" className={displays ? "SelectionElements__display--btn" : "SelectionElements__display--btnNo"} /></button>
            </section>

            {displays && <section className='SelectionElements__options'>

                {

                    list.map(articleType => {
                        const handleClick = () => {
                            setConfig(function (previousValue) {
                                return {
                                    ...previousValue,
                                    type: articleType.name
                                }
                            });

                            setPrice(function (previousValue) {
                                return{
                                    ...previousValue,
                                    typePrice: articleType.price
                                }
                            });

                            
                        }

                        if(name === 'Articulo'){
                            return <Options

                            key={articleType.name}
                            name={articleType.name}
                            imgElement={articleType.img}
                            selected={handleClick}
                        //style={{ backgroundColor: config.type === articleType.name ? 'lightblue' : 'white' }}
                        //onClick={handleClick}>
                        //{articleType.name} {articleType.price}
                        >
                        </Options>
                        }

                        
                    })
                }
                {
                    selectedArticleType?.colors.map(color => {
                        const handleClick = () => {
                            setConfig(function (previousValue) {
                                return {
                                    ...previousValue,
                                    color: color.name
                                }
                            });

                            setPrice(function (previousValue) {
                                return{
                                    ...previousValue,
                                    colorPrice: color.price
                                }
                            });
                        }

                        if (name === 'Color') {
                            return <Options
                                key={color.name}
                                imgElement={color.img}
                                selected={handleClick}
                            //style={{ backgroundColor: config.color === color.name ? 'lightblue' : 'white' }}
                            //onClick={handleClick}
                            >
                                //{color.name}
                            </Options>
                        }


                    })
                }
                {
                    selectedArticleType?.materials.map(material => {
                        const handleClick = () => {
                            setConfig(function (previousValue) {
                                return {
                                    ...previousValue,
                                    material: material.name
                                }
                            });

                            setPrice(function (previousValue) {
                                return{
                                    ...previousValue,
                                    materialPrice: material.price
                                }
                            });
                        }

                        if (name === 'Material') {
                            return <Options
                                key={material.name}
                                imgElement={material.img}
                                selected={handleClick}
                            //style={{ backgroundmaterial: config.material === material.name ? 'lightblue' : 'white' }}
                            //onClick={handleClick}
                            >
                                //{material.name}
                            </Options>
                        }

                    })
                }
                {
                    selectedArticleType?.design.map(design => {
                        const handleClick = () => {
                            setConfig(function (previousValue) {
                                return {
                                    ...previousValue,
                                    design: design.name
                                }
                            });

                            setPrice(function (previousValue) {
                                return{
                                    ...previousValue,
                                    designPrice: design.price
                                }
                            });
                        }

                        if (name === 'Diseño') {
                            return <Options
                                key={design.name}
                                imgElement={design.img}
                                selected={handleClick}
                            //style={{ backgrounddesign: config.design === design.name ? 'lightblue' : 'white' }}
                            //onClick={handleClick}
                            >
                                //{design.name}
                            </Options>
                        }

                    })
                    // list.map(({elemName, index, items}) => {
                    //     //console.log(name +" " + elemName)

                    //     if (elemName === name) {
                    //         return(
                    //             items.map(({ imgName, imgEnlace, display, indexItem }) => {

                    //                 const showPossibilities = () => {
                    //                     handleSelected(index,indexItem);

                    //                 }

                    //                 return (
                    //                     <Options
                    //                     name={imgName}
                    //                     imgElement={imgEnlace}
                    //                     isSelect = {display}
                    //                     selected = {showPossibilities}
                    //                     ></Options>
                    //                     );
                    //             }
                    //         )

                    //         );
                    //     }
                    // }
                    // )
                }











            </section>}
        </div>
    );
}