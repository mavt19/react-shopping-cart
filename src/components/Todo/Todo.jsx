import React from "react";
import css from '../../assets/css/Todo.css'

const Todo = (props) => {

    const {todo, index, completeTodo, removeTodo} = props

    const isComplete = {textDecoration: todo.isCompleted ? 'line-through' : ' '}

    const isComplete1 = {textDecoration: todo.isCompleted ? 'line-through' : ' ' }
    
    const complete = () => {
        completeTodo(index)
    }
    const remove = () => {
        removeTodo(index)
    }
    
    return ( 
        <div style={isComplete1}
        className="todo">
            {todo.text}
            <div>
                <button onClick={complete} style={{marginRight:5}}>Complete</button>
                <button onClick={remove}>delete</button>
            </div>
        </div>
        );
}
 
export default Todo;