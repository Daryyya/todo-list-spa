import React, { Fragment } from "react";
import style from "./style.module.scss";

const Column = ({ status, projectT }) => {
  const testarr = projectT.tasks?.filter((el) => el.status === status);

  return (
    <div className={style.column}>
      <div className={style.column__title}>{status}</div>
      {testarr?.map((el) => (
        <Fragment key={el.name}>
          <p>{el.name}</p>
          <p>{el.description}</p>
        </Fragment>
      ))}
    </div>
  );
};

export default Column;
