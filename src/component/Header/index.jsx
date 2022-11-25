import React from 'react'
import logo from './img/logo.png'
import style from './style.module.scss'

const Header = () => {
  return (
    <header className={style.header}>
        <div>
            <img src={logo} alt="logo" width={30}/>
        </div>
        <h1 className={style.header__title}>TODO-list</h1>
    </header>
  )
}

export default Header