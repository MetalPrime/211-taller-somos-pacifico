import * as React from 'react';
import './SaveItem.css';
import { ProductType } from '../../utils/ProductType';
import { getImageSrcFromUrl } from '../../utils/getImageSrcFromUrl';


export type SaveItemProps = Omit<ProductType, 'setConfigTypeName' | 'setConfigColorName' | 'setConfigMaterialName' | 'setConfigDesignName'>

export const SaveItem: React.FC<SaveItemProps> = ({setConfigTypeImage,setConfigColorImage,setConfigMaterialImage,setConfigDesignImage,price}) => {
    return (
        <section className='SaveItem'>
            <section className='SaveItem__img'>
                <img src={setConfigTypeImage == null ? undefined : getImageSrcFromUrl(setConfigTypeImage)} alt={setConfigTypeImage == null ? undefined : setConfigTypeImage} className="DisplayImg__img" />
                <img src={setConfigMaterialImage == null ? undefined : getImageSrcFromUrl(setConfigMaterialImage)} alt={setConfigMaterialImage == null ? undefined : setConfigMaterialImage} className="DisplayImg__img" />
                <img src={setConfigColorImage == null ? undefined : getImageSrcFromUrl(setConfigColorImage)} alt={setConfigColorImage == null ? undefined : setConfigColorImage} className="DisplayImg__img" style={{ mixBlendMode: 'hard-light' }} />
                <img src={setConfigDesignImage == null ? undefined : getImageSrcFromUrl(setConfigDesignImage)} alt={setConfigDesignImage == null ? undefined : setConfigDesignImage} className="DisplayImg__img" />
            </section>
            <section className='SaveItem__info'>
                <p>Precio Total ${price}</p>
                
            </section>
        </section>
    );
}