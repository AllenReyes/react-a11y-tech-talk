import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';
import { FaTrashAlt } from 'react-icons/fa';

const TodoItem = ({id, isSelected, description, removeItem, selectItem}) => {

  const handleRemoveItem = () => {
    removeItem(id);
  };

  const handleSelectItem = () => {
    selectItem(id);
  };

  const itemCheckboxInputId = `todo-item-checkboxid-${id.toString()}`;

  return (
    <div>
      <li className={styles.TodoItem} data-testid="TodoItem" data-id={id}>
        <div>
          <div className={styles.TodoItemControls}>
            <input id={itemCheckboxInputId} type="checkbox" onClick={handleSelectItem} defaultChecked={isSelected} />
            <label htmlFor={itemCheckboxInputId}>{description}</label>
          </div>
          <div className="remove-item-button">
            <button onClick={handleRemoveItem} data-id={id} title={"Delete item: " + description}><FaTrashAlt/></button>
          </div>
        </div>
      </li>
    </div>
  );
};

TodoItem.propTypes = {
  removeItem: PropTypes.func.isRequired,
  selectItem: PropTypes.func.isRequired
};

TodoItem.defaultProps = {};

export default TodoItem;
