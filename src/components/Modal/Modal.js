import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = ({open, onClose}) => {
  return (
    <>
    {open &&
      <div className={styles.Modal} data-testid="Modal">
        <section className={styles.Container}>
          <div className={styles.Content}>
            <h3>Modal accessibility demo</h3>
            <p>Let's see how it should behave</p>
            <button onClick={onClose}>Close</button>
          </div>
        </section>
      </div>
    }
    </>
  );
}

Modal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func
};

Modal.defaultProps = {
  open: false
};

export default Modal;
