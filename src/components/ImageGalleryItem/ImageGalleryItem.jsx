const ImageGalleryItem = ({ src, alt, id }) => {
    return(
        <li>
            <img src={src} alt={alt} id={id} />
        </li>
    )
}

export default ImageGalleryItem