import React, { useEffect, useState } from "react";
import { createTodo } from "../../../todo-list-api";
import style from './style.module.scss'

const ProjectForm = ({ onReceived }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());

    if (!value.project) {
      alert("no data");
      return;
    }

    createTodo(value, onReceived, 'project');
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input className={style.form__input} type="text" placeholder="Project name" name="project"/>
      <button className={style.form__btn} type="submit">Add new project</button>
    </form>
  );
};

export default ProjectForm;
