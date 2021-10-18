import React from 'react';
import PropTypes from 'prop-types';
import styles from './PersonCard.module.css';

const PersonCard = ({name, description}) => (
  <div className={styles.PersonCard} data-testid="PersonCard">
    <h2>
      <img src="./images/DefaultProfilePicture.jpg"/>
      <span>{name + "'s " + description}</span>
    </h2>
  </div>
);

PersonCard.propTypes = {
  name: PropTypes.string.isRequired
};

PersonCard.defaultProps = {
  name: 'Default Person',
  description: 'Default title'
};

export default PersonCard;
