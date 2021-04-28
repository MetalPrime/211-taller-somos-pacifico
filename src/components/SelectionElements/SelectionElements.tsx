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
    imgSrc : Configuration;
    setImgSrc : React.Dispatch<React.SetStateAction<Configuration>>;
}

interface OptionsElements {
    name: string;
    img: string;
    price: number;
    icon : string;
    colors: ItemsElements[];
    materials: ItemsElements[];
    design: ItemsElements[];
}

interface ItemsElements {
    name: string;
    img: string;
    price: number;
    icon?: string;
}

interface Configuration {
    type: string | null;
    color: string | null;
    material: string | null;
    design: string | null;
}

interface Price {
    type: number | null;
    color: number | null;
    material: number | null;
    design: number | null;
}

export const SelectionElements: React.FC<SelectionElements> = ({ name, displays,  showOptions, list, config, setConfig, price, setPrice, imgSrc, setImgSrc }) => {

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
                                    type: articleType.price
                                }
                            });

                            setImgSrc(function (previousValue) {
                                return{
                                    ...previousValue,
                                    type: articleType.img
                                }
                            });
                            

                            
                        }

                        if(name === 'Articulo'){
                            return <Options
                            kindItem = {'Articulo'}
                            key={articleType.name}
                            name={articleType.name}
                            imgElement={articleType.icon}
                            selected={handleClick}
                            isSelect={config.type === articleType.name ? true : false}
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
                                    color: color.price
                                }
                            });

                            setImgSrc(function (previousValue) {
                                return{
                                    ...previousValue,
                                    color: color.img
                                }
                            });

                        }

                        if (name === 'Color') {
                            return <Options
                                key={color.name}
                                kindItem={'Color'}
                                name={color.name}
                                imgElement={color.icon === undefined? color.img : color.icon}
                                selected={handleClick}
                                isSelect={config.color === color.name ? true : false}
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
                                    material: material.price
                                }
                            });
                            setImgSrc(function (previousValue) {
                                return{
                                    ...previousValue,
                                    material: material.img
                                }
                            });

                        }

                        if (name === 'Material') {
                            return <Options
                                key={material.name}
                                kindItem={'Material'}
                                name={material.name}
                                imgElement={material.img}
                                selected={handleClick}
                                isSelect={config.material === material.name ? true : false}
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
                                    design: design.price
                                }
                            });

                            setImgSrc(function (previousValue) {
                                return{
                                    ...previousValue,
                                    design: design.img
                                }
                            });

                        }

                        if (name === 'Diseño') {
                            return <Options
                                key={design.name}
                                name={design.name}
                                kindItem={'Diseño'}
                                imgElement={design.icon === undefined? design.img : design.icon}
                                selected={handleClick}
                                isSelect={config.design === design.name ? true : false}
                            //style={{ backgrounddesign: config.design === design.name ? 'lightblue' : 'white' }}
                            //onClick={handleClick}
                            >
                                //{design.name}
                            </Options>
                        }

                    })
                }











            </section>}
        </div>
    );
}