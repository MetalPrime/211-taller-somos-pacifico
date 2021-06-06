import * as React from 'react';
import './SaveItem.css';
import { ProductType } from '../../utils/ProductType';
import { getImageSrcFromUrl } from '../../utils/getImageSrcFromUrl';
import { onTestSaveFile } from '../../utils/saveItemAsImg';


export type SaveItemProps = Omit<ProductType, 'setConfigTypeName' | 'setConfigColorName' | 'setConfigMaterialName' | 'setConfigDesignName'>

export const SaveItem: React.FC<SaveItemProps> = ({setConfigTypeImage,setConfigColorImage,setConfigMaterialImage,setConfigDesignImage,price}) => {

    const handleDownload  = () => {
        onTestSaveFile(document.querySelector('.SaveItem__img'));
    }

    const handleReference = () => {
        var canvas : HTMLCanvasElement | null  = document.querySelector('.SaveItem__img');
        var context = canvas?.getContext('2d');
        
        make_base();
        
        function make_base(){
        let base_image_type = new Image();
          base_image_type.src = getImageSrcFromUrl(setConfigTypeImage);
          base_image_type.onload = function(){
            context?.drawImage(base_image_type, 0, 0, canvas!.width,canvas!.height);
            console.log("working");
          }
          let base_image_material = new Image();
          base_image_material.src = getImageSrcFromUrl(setConfigMaterialImage);
          base_image_material.onload = function(){
            context?.drawImage(base_image_material, 0, 0, canvas!.width,canvas!.height);
            console.log("working");
          }
          let base_image_color = new Image();
          base_image_color.src = getImageSrcFromUrl(setConfigColorImage);
          base_image_color.onload = function(){
            context?.drawImage(base_image_color, 0, 0, canvas!.width,canvas!.height);
            console.log("working");
          }
          let base_image_image = new Image();
          base_image_image.src = getImageSrcFromUrl(setConfigDesignImage);
          base_image_image.onload = function(){
            context?.drawImage(base_image_image, 0, 0, canvas!.width,canvas!.height);
            console.log("working");
          }
        }
    }

    handleReference();
    return (
        <section className='SaveItem__element'>
            <canvas className='SaveItem__img'>
            </canvas>
            <section className='SaveItem__info'>
                <p>Precio Total ${price}</p>
                <button onClick={handleDownload}>Descargar</button>  
            </section>
        </section>
    );
}