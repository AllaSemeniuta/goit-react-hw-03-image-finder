import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.module.css';

import ReactDOM from 'react-dom';

// const modalRoot = document.querySelector('#modal-root');

// export class Modal extends Component {
//   static propTypes = {
//     largeImg: PropTypes.string.isRequired,
//     tags: PropTypes.string,
//     onCloseModal: PropTypes.func,
//   };

//   componentWillUnmount() {
//     document.body.classList.remove('noScroll');
//   }

//   render() {
//     const { largeImg, tags, onCloseModal } = this.props;

//     return (
//       <div className={styles.overlay} id="overlay" onClick={onCloseModal}>
//         <div className={styles.modal}>
//           <img src={largeImg} alt={tags} />
//         </div>
//       </div>
//     );
//   }
// }

export class Modal extends Component {
  static propTypes = {
    largeImg: PropTypes.string.isRequired,
    tags: PropTypes.string,
    onCloseModal: PropTypes.func,
  };

  componentWillUnmount() {
    document.body.classList.remove('noScroll');
  }

  render() {
    const { largeImg, tags, onCloseModal } = this.props;

    return ReactDOM.createPortal(
      <div className={styles.overlay} id="overlay" onClick={onCloseModal}>
        <div className={styles.modal}>
          <img src={largeImg} alt={tags} />
        </div>
      </div>,
      document.querySelector('#modal-root')
    );
  }
}
