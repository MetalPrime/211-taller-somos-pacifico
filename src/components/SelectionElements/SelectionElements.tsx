import * as React from 'react';
import './SelectionElements.css';
import ArrowLogo from './arrow.svg';
import { Options } from '../Options/Options';
import { ProductType } from '../../utils/ProductType';

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
    product : ProductType;
    setProduct : React.Dispatch<React.SetStateAction<ProductType>>
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

export type SelectionElementsProps = Omit<ProductType,'price'|'id'>


export const SelectionElements: React.FC<SelectionElements> = ({ name, displays,  showOptions, list, config, setConfig, setPrice, setImgSrc, product,  setProduct }) => {

    const selectedArticleType = list.find(article => {
        return article.name === config.type || article.name === product.setConfigTypeName
    });


    
      const handleTypeChange = (name: string, price: number, img: string) => {
        setProduct((prev) => ({
          ...prev,
          setConfigTypeName: name,
          setConfigTypePrice: price, 
          setConfigTypeImage: img,
        }));
      }
      const handleMaterialChange = (name: string, price: number, img: string) => {
        setProduct((prev) => ({
          ...prev,
          setConfigMaterialName: name,
          setConfigMaterialPrice: price, 
          setConfigMaterialImage: img,
        }));
      }

      const handleColorChange = (name: string, price: number, img: string) => {
        setProduct((prev) => ({
          ...prev,
          setConfigColorName: name,
          setConfigColorPrice: price, 
          setConfigColorImage: img,
        }));
      }

      const handleDesignChange = (name: string, price: number, img: string) => {
        setProduct((prev) => ({
          ...prev,
          setConfigDesignName: name,
          setConfigDesignPrice: price, 
          setConfigDesignImage: img,
        }));
      }

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
                                    type:  product.setConfigTypeName || articleType.name 
                                }
                            });


                            setPrice(function (previousValue) {
                                return{
                                    ...previousValue,
                                    type:product.setConfigTypePrice ||  articleType.price 
                                }
                            });


                            setImgSrc(function (previousValue) {
                                return{
                                    ...previousValue,
                                    type:  product.setConfigTypeImage ||  articleType.img 
                                }
                            });

                            handleTypeChange(articleType.name,articleType.price,articleType.img)
                        }

                        if(name === 'Articulo'){
                            return <Options
                            kindItem = {'Articulo'}
                            key={articleType.name}
                            name={articleType.name}
                            imgElement={articleType.icon}
                            selected={handleClick}
                            isSelect={config.type === articleType.name || articleType.name === product.setConfigTypeName? true : false}
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
                                    color: color.name || product.setConfigColorName
                                }
                            });

                            setPrice(function (previousValue) {
                                return{
                                    ...previousValue,
                                    color: color.price || product.setConfigColorPrice
                                }
                            });

                            setImgSrc(function (previousValue) {
                                return{
                                    ...previousValue,
                                    color: color.img || product.setConfigColorImage
                                }
                            });

                            handleColorChange(color.name,color.price,color.img);
                        }

                        if (name === 'Color') {
                            return <Options
                                key={color.name}
                                kindItem={'Color'}
                                name={color.name}
                                imgElement={color.icon === undefined? color.img : color.icon}
                                selected={handleClick}
                                isSelect={config.color === color.name || color.name === product.setConfigColorName ? true : false}
                            //onClick={handleClick}
                            >
                                
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
                                    material: material.name || product.setConfigMaterialName
                                }
                            });

                            setPrice(function (previousValue) {
                                return{
                                    ...previousValue,
                                    material: material.price || product.setConfigMaterialPrice
                                }
                            });
                            setImgSrc(function (previousValue) {
                                return{
                                    ...previousValue,
                                    material: material.img || product.setConfigMaterialImage
                                }
                            });
                            handleMaterialChange(material.name,material.price,material.img);
                        }

                        if (name === 'Material') {
                            return <Options
                                key={material.name}
                                kindItem={'Material'}
                                name={material.name}
                                imgElement={material.img}
                                selected={handleClick}
                                isSelect={config.material === material.name || material.name === product.setConfigMaterialName? true : false}
                            //style={{ backgroundmaterial: config.material === material.name ? 'lightblue' : 'white' }}
                            //onClick={handleClick}
                            >
                                
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
                                    design: design.name || product.setConfigDesignName
                                }
                            });

                            setPrice(function (previousValue) {
                                return{
                                    ...previousValue,
                                    design: design.price || product.setConfigDesignPrice
                                }
                            });

                            setImgSrc(function (previousValue) {
                                return{
                                    ...previousValue,
                                    design: design.img || product.setConfigDesignImage
                                }
                            });
                            handleDesignChange(design.name,design.price,design.img);
                        }

                        if (name === 'Diseño') {
                            return <Options
                                key={design.name}
                                name={design.name}
                                kindItem={'Diseño'}
                                imgElement={design.icon === undefined? design.img : design.icon}
                                selected={handleClick}
                                isSelect={config.design === design.name || design.name === product.setConfigDesignName ? true : false}
                            //style={{ backgrounddesign: config.design === design.name ? 'lightblue' : 'white' }}
                            //onClick={handleClick}
                            >
                                
                            </Options>
                        }

                    })
                }











            </section>}
        </div>
    );
}