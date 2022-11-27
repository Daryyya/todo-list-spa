import React from "react";
import style from "./style.module.scss";
import { deleteTodo } from "../../../todo-list-api";
import { Link } from "react-router-dom";

const ProjectList = ({onReceived, projectList}) => {

  const handleDeleteButton = (id) => {
    deleteTodo(id, onReceived)
  }

  return (
    <>
    {
      projectList.map((el) => (
        <div key={el.id} className={style.project}>
        <Link to={`/tasks?id=${el.id}`} className={style.project__link}>
          {el.project}
        </Link>
        <button onClick={() => handleDeleteButton(el.id)} className={style.project__delBtn}>✖</button>
      </div>
      ))
    }
    </>
  );
};

export default ProjectList;
