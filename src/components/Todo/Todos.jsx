import React, { useState } from "react";
import Todo from "./Todo";
import "../../assets/css/Todo.css";
import TodoForm from "./TodoForm";

const Todos = () => {
  const data = [
    {
      text: "Learn about React",
      isCompleted: false,
    },
    {
      text: "Learn about Angular",
      isCompleted: false,
    },
    {
      text: "Learn about Vue",
      isCompleted: false,
    },
    {
      text: "Learn about Svelte",
      isCompleted: true,
    },
  ];

  const [todos, setTodos] = useState(data);

  const [completed, setCompleted] = useState(data.isCompleted)

  const addTodo = (valor) => {
    const newTodos = [...todos, { text: valor }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
   
    
    const newTodos = [...todos];
    setCompleted(!completed)
    newTodos[index].isCompleted=completed
    
    //newTodos[index].isCompleted ? false : true
   /* if (!newTodos[index].isCompleted) {
      newTodos[index].isCompleted =true
    } else {
      newTodos[index].isCompleted =false
    }
    */
    setTodos(newTodos);
    
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index,1)
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default Todos;
