import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';
import { FaTrashAlt } from 'react-icons/fa';

const TodoItem = ({
  description,
  id,
  isChecked,
  removeItem,
  checkItem
}) => {


  const handleRemoveItem = () => {
    removeItem(id);
  };

  const handleCheckItem = () => {
    checkItem(id);
  };

  const itemCheckboxInputId = `todo-item-checkboxid-${id.toString()}`;

  return (
    <div>
      <li className={styles.TodoItem} data-testid="TodoItem" data-id={id}>
        <div>
          <div className={styles.TodoItemControls}>
            <input
              id={itemCheckboxInputId}
              type="checkbox"
              onClick={handleCheckItem}
              defaultChecked={isChecked}
            />
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
  description: PropTypes.string,
  id: PropTypes.any.isRequired,
  isChecked: PropTypes.bool.isRequired,
  removeItem: PropTypes.func.isRequired,
  checkItem: PropTypes.func.isRequired
};

TodoItem.defaultProps = {
  description: ''
};

export default TodoItem;
