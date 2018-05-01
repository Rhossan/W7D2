import * as TodoApiUtil from '../util/todo_api_util';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos
  };
};

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo
  };
};

export const fetchTodos = () => {
  return (dispatch) => {
    return TodoApiUtil.fetchTodos().then( todos => {
      dispatch(receiveTodos(todos));
    });
  };
};
// export const createTodo = (todo) => {
//   return (dispatch) => {
//
//   }
// };
