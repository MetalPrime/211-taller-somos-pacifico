import { saveAs } from 'file-saver';


export const onTestSaveFile = (canvas : HTMLCanvasElement | null) => {
     
    console.log(typeof canvas)
        canvas?.toBlob((blob) =>{ 
            if(blob?.type){
                saveAs(blob, "image.png");
            } else {
    
            }
            
        });
    
    
}
