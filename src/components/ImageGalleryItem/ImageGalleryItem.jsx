const ImageGalleryItem = ({ src, alt, id }) => {
    return(
        <li className="image-galleryItem">
            <img className="image-galleryItem-image" src={src} alt={alt} id={id} />
        </li>
    )
}

export default ImageGalleryItem