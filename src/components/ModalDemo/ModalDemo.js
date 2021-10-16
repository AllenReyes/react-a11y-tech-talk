import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ModalDemo.module.css';
import { Button, Modal, Box, Typography } from '@mui/material';
import { render } from '@testing-library/react';


const ModalDemo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = (e) => {
    setIsModalOpen(false);
  };

  const handleShowModal = (e) => {
    setIsModalOpen(true);
  };

  return (
    <div className={styles.ModalDemo} data-testid="ModalDemo">
      <h2>ModalDemo Component</h2>
      <Button color="primary" size="large" variant="contained"
        onClick={handleShowModal}>Show modal</Button>
      <Modal disableEnforceFocus className={styles.ModalContainer} open={isModalOpen} onClose={handleCloseModal}>
        <Box className={styles.ModalBox}>
          <div className={styles.ModalContent}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              NDEAM Modal Demonstration
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Let's see what happens when we close this modal.
            </Typography>
            <Button color="primary" size="small" variant="contained" onClick={handleCloseModal}>Close</Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
};

ModalDemo.propTypes = {};

ModalDemo.defaultProps = {};

export default ModalDemo;
