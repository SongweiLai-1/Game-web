import noImage from "../assets/No_image_available.svg.png"
const getCroppedImageUrl = (url: string) => {

    if (!url) return '';
    const target = 'media/'
    const index = url.indexOf(target)+target.length;
    return url.slice(0,index) + 'crop/600/400/' + url.slice(index)

}

export default getCroppedImageUrl;