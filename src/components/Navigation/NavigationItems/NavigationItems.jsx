import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem active link="/" c>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/" c>
        Checkout
      </NavigationItem>
    </ul>
  )
}

export default NavigationItems
