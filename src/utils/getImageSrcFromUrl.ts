const baseUrl = `${process.env.PUBLIC_URL}/img/`;

export const getImageSrcFromUrl = (url: string)=>{
    if(url.includes("blank")) {
        return undefined;
    }
    return `${baseUrl}${url}`;
}