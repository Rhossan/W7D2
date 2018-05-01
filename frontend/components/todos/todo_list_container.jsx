import {connect} from 'react-redux';
import TodoList from './todo_list';
import {receiveTodo, receiveTodos, fetchTodos} from '../../actions/todo_actions';

const mapStateToProps = (state) => {
  return {
    todos: Object.values(state.todos)
  };
};

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  fetchTodos: (todo) => dispatch(fetchTodos())
});


const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
