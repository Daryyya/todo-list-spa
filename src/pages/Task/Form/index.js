import React from 'react'
import { updateTodo } from '../../../todo-list-api';
import style from './style.module.scss'

const Form = ({currentProject, onReceived, setIsOpen}) => {

  console.log(currentProject)

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const value = Object.fromEntries(data.entries());

        currentProject.tasks.find(el => el.status === 'Queue').task.push(value)

        // const test = {...currentProject, tasks: [...(currentProject?.tasks || []), value]}
        // test.tasks.status = 'Oueue'
        // console.log({currentProject});

        updateTodo(currentProject.id, currentProject, onReceived)

        setIsOpen(false)

    }

  return (
    <div className={style.popup}>
      <form onSubmit={handleSubmit} className={style.modal}>
        <button onClick={() => setIsOpen(false)} className={style.close}>✖</button>
        <input className={style.modal__input} type='text' placeholder='number' name='number'/>
        <input className={style.modal__input} type='text' placeholder='name' name='name'/>
        <input className={style.modal__input} type='text' placeholder='description' name='description'/>
        <input className={style.modal__input} type='date' name='date'/>
        <button className={style.modal__button} type='submit'>Add</button>
    </form>
    </div>
    
  )
}

export default Form