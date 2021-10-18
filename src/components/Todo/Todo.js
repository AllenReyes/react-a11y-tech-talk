import React, { useState, useRef, useEffect } from 'react';
import styles from './Todo.module.css';
import TodoItem from '../TodoItem/TodoItem';
import PersonCard from '../PersonCard/PersonCard';
import { FaPlus } from 'react-icons/fa';
import { getList, setList } from '../../utils/todoListUtils';

const name = 'Mega Man';

const Todo = () => {
  const [todoList, setTodoList] = useState(getList());
  const [todoListLength, setTodoListLength] = useState(0);

  useEffect(() => {
    document.title = 'NDEAM Demo | Todo Workshop';
  }, []);

  const newTodoInput = useRef(null);
  useEffect(() => {
    if (todoListLength) {
      newTodoInput.current.value = '';
      newTodoInput.current.focus();
    }
  }, [todoListLength]);

  const updateTodoList = (list) => {
    setTodoList(list);
    setList(list);
    setTodoListLength(list.length);
  };

  const addItem = (label) => {
    if (label) {
      const newTodo = {
        id: new Date().toJSON(),
        label,
        addedBy: name,
        isSelected: false
      };
      const newTodoList = [...todoList, newTodo];

      updateTodoList(newTodoList);
    } else {
      newTodoInput.current.focus();
    }
  };

  const removeItem = (id) => {
    const filteredList = todoList.filter(item => {
      return item.id !== id;
    });
    updateTodoList(filteredList);
  };

  const selectItem = (id) => {
    const newTodoList = todoList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isSelected: !item.isSelected,
        };
      }

      return item;
    });

    updateTodoList(newTodoList);
  };

  const handleAddItem = () => {
    addItem(newTodoInput.current.value);
  };

  const handleTodoKeyDown = (e) => {
    const enterKeyCode = 13;
    if (e.keyCode === enterKeyCode) {
      addItem(newTodoInput.current.value);
    }
  };

  const TodoListContent = () => {
    if (todoList.length) {
      return (
        <ul>
          {todoList.map(item => (
            <TodoItem
              key={item.id}
              id={item.id}
              isSelected={item.isSelected}
              description={item.label}
              removeItem={removeItem}
              selectItem={selectItem}
            />
          ))}
        </ul>
      );
    }
    return (
      <p>Empty to do list. Great job {name}!</p>
    )
  };

  return (
    <div className={styles.Todo} data-testid="Todo">
      <PersonCard description="Todo list" name={name} />
      <TodoListContent/>
      <div className={styles.TodoAddControls}>
        <label htmlFor="new-item-input">New Todo</label>
        <input id="new-item-input" type="text" ref={newTodoInput} onKeyDown={handleTodoKeyDown} autoComplete="off" />
        <button onClick={handleAddItem}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

Todo.propTypes = {};

Todo.defaultProps = {};

export default Todo;
