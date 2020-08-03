import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import { FiMenu } from 'react-icons/fi'


const Toolbar = ({showSideDrawer}) => {
  return (
    <header className={classes.Toolbar}>
      <div onClick={showSideDrawer}><FiMenu /></div>
      <div className={classes.Logo}>
      <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  )
}

export default Toolbar
