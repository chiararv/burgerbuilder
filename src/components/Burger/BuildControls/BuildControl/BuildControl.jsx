import React from 'react';
import classes from './BuildControl.module.css'

const BuildControl = ({label, ingredientAdded, ingredientRemoved}) => {
  return ( 
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button className={classes.Less} onClick={ingredientRemoved}>Less</button>
      <button className={classes.More} onClick={ingredientAdded}>More</button>
    </div>
   );
}
 
export default BuildControl;