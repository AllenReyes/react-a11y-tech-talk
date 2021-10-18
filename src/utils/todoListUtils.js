
const getList = () => {
  return JSON.parse(localStorage.getItem('a11yDemoTodoList')) || [];
}

const setList = (value = []) => {
  localStorage.setItem('a11yDemoTodoList', JSON.stringify(value));
}

export {
  getList,
  setList
}