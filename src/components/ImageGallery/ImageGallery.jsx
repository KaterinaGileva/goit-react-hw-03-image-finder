export const ImageGallery = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          12
        </li>
      ))}
    </ul>
  );
};


//import PropTypes from 'prop-types';
//import ImageGalleryItem from 'components/ImageGalleryItem';
//import css from './ImageGallery.module.css';

//export const ImageGallery = ({ images /*openModal*/ }) => {
 // return (
   // <ul className={css.container}>
   //   {images.map(({ id, description, smallImage, largeImage }) => (
    //    <ImageGalleryItem
    //      key={id}
    //      description={description}
    //      smallImage={smallImage}
     //     largeImage={largeImage}
     //     //openModal={openModal}
     //   />
     // ))}
    //</ul>
  //);
//}

//ImageGallery.prototype = {
  //images: PropTypes.arrayOf(
   // PropTypes.shape({
   //   id: PropTypes.number.isRequired,
   //   description: PropTypes.string.isRequired,
    //  smallImage: PropTypes.string.isRequired,
   //   largeImage: PropTypes.string.isRequired,
   // })
  //).isRequired,
//};


//import { Component } from 'react';
//import { ImImages } from 'react-icons/im';
//import { cssTransition } from 'react-toastify';
//import css from './ImageGallery.module.css';
//import { ImSearch } from 'react-icons/im';
//import { toast } from 'react-toastify';



//function ImageGallery ({ images, openModal}) {
// return (
//  <ul className={css.ImageGallery}>
 //   {images.map(({ id, description, smallImage, largeImage }) => (
//<ImageGalleryItem
 //  key={id}
 //  description={description}
 // smallImage={smallImage}
  // largeImage={largeImage}
 //  openModal={openModal} />
//))}
//</ul>
//);
 //   }

//const styles = { form: { marginBottom: 20 } };

/*export class ImageGallery extends Component {
  state = {
    photoName: '',
  };

  handleNameChange = event => {
    this.setState({ photoName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.photoName.trim() === '') {
      toast.error('Введите имя покемона.');
      return;
    }

    this.props.onSubmit(this.state.photoName);
    this.setState({ photoName: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        <input
          type="text"
          name="pokemonName"
          value={this.state.photoName}
          onChange={this.handleNameChange}
        />
        <button type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          Найти
        </button>
      </form>





    );
  }
}


//export const ImageGallery = ({value, onChange}) => {
 // return (
  //<ul className={css.gallery}>
  // <li>

   //</li>
  // </ul>
 // );

//}*/