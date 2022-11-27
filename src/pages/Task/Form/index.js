import React from 'react'
import { updateTodo } from '../../../todo-list-api';

const Form = ({currentProject, onReceived}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const value = Object.fromEntries(data.entries());
        const test = {...currentProject, tasks: [...(currentProject?.tasks || []), value]}
        console.log({currentProject});

        updateTodo(test.id, test, onReceived)

    }

  return (
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='name' name='name'/>
        <input type='text' placeholder='description' name='description'/>
        <select name='status'>
            <option value='Very-very-important 🔴'>vv im</option>
        
            <option value='Very-important 🟡'>v im</option>
            <option value='Important 🟢'>im</option>

        </select>
        <button type='submit'>Add</button>
    </form>
  )
}

export default Form