import React, { useState, useEffect } from 'react';
import styles from './ModalWorkingDemo.module.css';
import Modal from '../Modal/Modal';

const ModalWorkingDemo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.title = 'NDEAM Demo | Modal Workshop';
  }, []);

  const handleCloseModal = (e) => {
    setIsModalOpen(false);
  };

  const handleShowModal = (e) => {
    setIsModalOpen(true);
  };
  return (
    <div className={styles.ModalWorkingDemo} data-testid="ModalWorkingDemo">
      <h2>Modal Working Demo</h2>
      <button onClick={handleShowModal}>Show</button>
      <Modal open={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

ModalWorkingDemo.propTypes = {};

ModalWorkingDemo.defaultProps = {};

export default ModalWorkingDemo;
