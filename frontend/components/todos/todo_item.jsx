import React from 'react';

const Todo = ({ todo }) => (

  // const taskComplete = () => {
  //   if(todo.done) return "done";
  //   else {
  //     return "not done;"
  //   }
  // }


	<div className="list-todo">
		<h3>
			{todo.title}
		</h3>
		<span>
			{todo.body}
      <br/>
      Done:
      { todo.done.toString()}
		</span>
	</div>
);

export default Todo;
