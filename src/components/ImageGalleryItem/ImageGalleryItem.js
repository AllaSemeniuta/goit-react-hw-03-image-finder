import { Component } from 'react';
import styles from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    largeSize: null,
  };

  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  onClickImg = largeSize => {
    document.body.classList.add('noScroll');
    this.setState({ largeSize: largeSize });

    // const image = document.querySelector('#webImage');

    // image.addEventListener('click', this.onCloseModal);
    document.addEventListener('keydown', this.onCloseModal);
  };

  onCloseModal = e => {
    // const image = document.querySelector('#webImage');

    if (e.currentTarget === e.target) {
      console.log('клік по бєкдропу');
      this.setState({ largeSize: null });
      // image.removeEventListener('click', this.onCloseModal);
      document.removeEventListener('keydown', this.onCloseModal);
      return;
    }

    if (e.code === 'Escape') {
      console.log('клік по ескейру');
      this.setState({ largeSize: null });
      // image.removeEventListener('click', this.onCloseModal);
      document.removeEventListener('keydown', this.onCloseModal);
      return;
    }
  };
  render() {
    const { item } = this.props;
    return (
      <>
        <img
          src={item.webSize}
          alt={item.tags}
          className={styles.image}
          onClick={() => this.onClickImg(item.largeSize)}
          id="webImage"
        />
        {this.state.largeSize !== null && (
          <Modal
            largeImg={item.largeSize}
            tags={item.tags}
            onCloseModal={this.onCloseModal}
          />
        )}
      </>
    );
  }
}
