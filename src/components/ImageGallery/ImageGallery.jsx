import { Component } from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";

class ImageGallery extends Component {
    static defaultProps = {
        images: [],
        pages: 0,
    }

    render(){
        return(
            <ul>
                {this.props.images.map(image => (
                    <ImageGalleryItem
                        key={image.id}
                        id={image.id}
                        src={image.webformatURL}
                        alt={image.tags}
                    />
                ))}
            </ul>
        )
    }
}

export default ImageGallery;