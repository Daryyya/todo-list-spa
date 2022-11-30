import style from './style.module.scss'
import React from 'react';
import { createTodo } from "../../../todo-list-api";

const ProjectForm = ({ onReceived }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());

    if (!value.project) {
      alert("no data");
      return;
    }

    createTodo(value, onReceived)
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input className={style.form__input} type="text" placeholder="Project name" name="project"/>
      <button className={style.form__btn} type="submit">Add new project</button>
    </form>
  );
};

export default ProjectForm;
