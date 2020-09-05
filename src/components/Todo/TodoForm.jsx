import React, { useState } from 'react';
import  '../../assets/css/Todo.css'

const TodoForm = (props) => {
    const {addTodo} = props

    const [value, setValue] = useState('')

    const handleInputChange = (event) => {
        setValue(event.target.value);
        console.log(event.target.value)
      }

    const handleSubmit = (event) =>{
        event.preventDefault()
        if(!value) return
        console.log(value)
        addTodo(value)
        setValue('')
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text"
                className="input"
                value={value}
                placeholder="Add Todo..."
                onChange={handleInputChange}
            />
        </form>
     );
}
 
export default TodoForm;