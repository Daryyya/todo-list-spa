import React, { Fragment, useState } from "react";
import style from "./style.module.scss";

const Column = ({ status, projectT }) => {
  const testarr = projectT.tasks?.filter((el) => el.status === status);

  const [item, setItem] = useState(null);
  const [column, setColumn] = useState('')

  const handleDragOver = (e) => {
    console.log(e)
    e.preventDefault()
    if (e.target.className == 'style_item__6oAXY') {
      e.target.style.boxShadow = '0 4px 3px red'
    }
  }

  const handleDragLeave = (e) => {
    e.target.style.boxShadow = 'none'

  }

  const handleDragStart = (e, el) => {
    setItem(el)
  }

  const handleDragEnd = (e) => {
    e.target.style.boxShadow = 'none'

  }

  const handleDrop = (e, el) => {
    
    e.preventDefault()
    
  }

  return (
    <div className={style.column}>
      <div className={style.column__title}>{status}</div>
      {testarr?.map((el, index) => (
        <Fragment key={el.name}>
          <p
            draggable="true"
            onDragOver={(e) => handleDragOver(e)}
            onDragLeave={(e) => handleDragLeave(e)}
            onDragStart={(e) => handleDragStart(e, el)}
            onDragEnd={(e) => handleDragEnd(e)}
            onDrop={(e) => handleDrop(e, el, index)}
            className={style.item}
          >
            {el.name}
          </p>
        </Fragment>
      ))}
    </div>
  );
};

export default Column;
