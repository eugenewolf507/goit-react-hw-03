import React, { Component, Fragment, createRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.css';
import PhotoCard from '../PhotoCard/PhotoCard';
import Modal from '../Modal/Modal';

class Gallery extends Component {
  state = {
    isModalOpen: false,
    largeImageURL: '',
  };

  // constructor(props) {
  //   super(props);
  // this.ref = props.items.reduce((acc, value) => {
  //   acc[value.id] = createRef();
  //   return acc;
  // }, {});
  // }

  // componentDidUpdate() {
  //   const { items } = this.props;
  //   const { ref } = this.props;

  //   // ref = items.reduce((acc, value) => {
  //   //   acc[value.id] = createRef();
  //   //   return acc;
  //   // }, {});

  //   console.log('componentDidUpdate==============================');
  //   // console.log(this.ref);
  //   let scrollItemArrNumber = 0;
  //   if (items.length > 12) {
  //     scrollItemArrNumber = items.length - 12;
  //   }

  //   const scrollItemID = items[scrollItemArrNumber].id;
  //   console.log(`items.length: ${items.length}`);
  //   console.log(`scrollItemArrNumber: ${scrollItemArrNumber}`);
  //   console.log(`scrollItemID: ${scrollItemID}`);
  //   console.log(
  //     `items[scrollItemArrNumber].id: ${items[scrollItemArrNumber].id}`,
  //   );
  //   console.log(`this.ref[scrollItemID]: ${this.ref[scrollItemID]}`);
  //   console.log(this.ref);

  //   this.ref[items[10].id].current.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'start',
  //   });
  // }

  openModal = largeImageURL => {
    this.setState({ isModalOpen: true, largeImageURL });
  };

  closeModal = () => this.setState({ isModalOpen: false });

  // ========== RENDER ==========
  render() {
    const { items } = this.props;
    const { isModalOpen, largeImageURL } = this.state;
    console.log(`==============`);

    const refs = items.reduce((acc, value) => {
      acc[value.id] = createRef();
      return acc;
    }, {});

    const handleClick = id =>
      refs[id].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

    // const autoScroll = () =>
    //   refs[items[2].id].current.scrollIntoView({
    //     behavior: 'smooth',
    //     block: 'start',
    //   });
    if (items.length > 12) {
      console.log(items[2].id);
      console.log(refs[items[2]]);
      // refs[items[10].id].current.scrollIntoView({
      //   behavior: 'smooth',
      //   block: 'start',
      // });
    }
    console.log('refs:');
    console.log(refs);
    console.log(`items.length: ${items.length}`);
    // ========== RETURN ==========
    return (
      <Fragment>
        {isModalOpen && (
          <Modal onClose={this.closeModal}>
            <img src={largeImageURL} alt="" className={styles.image} />
          </Modal>
        )}
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <button type="button" onClick={() => handleClick(item.id)}>
                Scroll Item {item.id} Into View
              </button>
            </li>
          ))}
        </ul>

        {items.length > 0 && (
          <ul className={styles.gallery}>
            {items.map(item => (
              <li key={item.id} ref={refs[item.id]}>
                <PhotoCard {...item} showLargeImage={this.openModal} />
              </li>
            ))}
          </ul>
        )}
      </Fragment>
    );
  }
}

Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      downloads: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Gallery;
