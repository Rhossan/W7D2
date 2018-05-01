import React from 'react';
import TodoItem from './todo_item';
// import { receiveTodo } from '../../actions/todo_actions';
import TodoForm from './todo_form';

// class TodoList extends React.Component {
//   componentDidMount() {
//     fetchTodos();
//   }
//
//   render (
//     <div className="todo-list">
//       <ul className='todo-items'>
//         {todoItems}
//       </ul>
//
//       <div className="todo-form">
//         <TodoForm receiveTodo={receiveTodo}/>
//       </div>
//     </div>
//   )
//
// }
const TodoList = ({todos, receiveTodo, fetchTodos}) => {


  const todoItems = todos.map((todo, idx) => (
    <TodoItem key={idx} todo={todo} />
  ))

  return (
		<div className="todo-list">
			<ul className='todo-items'>
				{todoItems}
			</ul>

      <div className="todo-form">
        <TodoForm receiveTodo={receiveTodo}/>
      </div>
		</div>
	);
};

export default TodoList;
