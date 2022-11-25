import React from 'react'
import style from './style.module.scss'

const Column = ({status}) => {
  return (
    <div className={style.column}>
        <div className={style.column__title}>{status}</div>
    </div>
  )
}

export default Column