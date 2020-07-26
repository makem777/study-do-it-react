import React, { PureComponent } from 'react';

class Todolist extends PureComponent {
  render() {
    const todoList = [
      { taskName: '빨래하기', finised: false },
      { taskName: '공부하기', finised: true },
    ];
    return (
      <div>
        {todoList.map(todo => (
          <div key={todo.taskName}>{todo.taskName}</div>
        ))}
      </div>
    );
  }
}

export default Todolist;
