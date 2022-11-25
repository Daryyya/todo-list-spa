import React from "react";
import style from "./style.module.scss";

const ProjectList = () => {
  return (
    <>
      <div className={style.project}>
        <a href="#" className={style.project__link}>
          First project
        </a>
        <button className={style.project__delBtn}>✖</button>
      </div>
      <div className={style.project}>
        <a href="#" className={style.project__link}>
          Second project
        </a>
        <button className={style.project__delBtn}>✖</button>
      </div>
    </>
  );
};

export default ProjectList;
