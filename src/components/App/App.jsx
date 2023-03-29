import { Component } from "react";
import Searchbar from "components/Searchbar/Searchbar";
import ImageGallery from "components/ImageGallery/ImageGallery";

const KEY = '33302890-ea105e46da5a591cb4b446b85'
class App extends Component {
  state = {
    images: [],
    searchText: '',
    pages: 0,
    isLoading: false,
    isModalShown: false,
    modalImageSource: '',
    modalAlt: '',
    
  }

  fetchImages = async url => {
    const images = await fetch(url);
    const imagesJson = await images.json();
    return imagesJson.hits;
  }

  handleSubmit = async event => {
    event.preventDefault();

    const page = 1;
    const input = event.target[1]['value'];
    const URL = `https://pixabay.com/api/?q=${input}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`

    const images = await this.fetchImages(URL)

    this.setState({
      images: images,
      searchText: input,
      pages: page
    })
  }

  handleImageClick = event => {
    const id = event.target.id;

    const imageObject = this.state.images.find(
      element => element.id === Number(id)
    );

    this.setState({
      isModalShown: true,
      modalImageSource: imageObject.largeImageURL
    })
  }

  handleEsc = event => {
    if (event.key === 'Escape') {
      this.setState({
        isModalShown: false
      })
    }
  }

  handleOverlayClick = event => {
    if (event.target.classList.contains('overlay')){
      this.setState({
        isModalShown: false
      })
    }
  }

  render(){
    const { images } = this.state;
    // const { images, isModalShown, modalImageSource, modalAlt } = this.state;
    // const isGalleryItemsShown = images['length'] === 0 ? false : true;

    return(
      <>
        {/* {isModalShown ? (
          <Modal
            src={modalImageSource}
            alt={modalAlt}
            handleOverlayClick={this.handleOverlayClick}
            handleEsc={this.handleEsc} 
          />
        ) : (
          <></>
        )} */}

        <Searchbar handleSubmit={this.handleSubmit}/>

        <ImageGallery 
          images={images}
          handleImageClick={this.handleImageClick}
        />
        
      </>
    )
  }
}

export default App;
