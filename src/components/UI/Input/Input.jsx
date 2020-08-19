import React from 'react'
import classes from './Input.module.css';

const Input = (props) => {
  let inputElement = null
  const inputClasses = [classes.InputElement]

  if(props.invalid && props.shouldValidate && props.touched) {
     inputClasses.push(classes.Invalid)
  }
  let validationError = null
  if(props.invalid && props.touched) {
    validationError = <p className={classes.ValidationError} >Please enter a valid {props.valueType}</p>
  }

  switch (props.elementType) {
    case ('input'):
      inputElement = (
        <input
          onChange={props.changed}
          value={props.value}
          {...props.elementConfig}
          className={inputClasses.join(' ')}/>
          )
      break;
    case ('textarea'):
      inputElement = (
        <textarea
        onChange={props.changed}
        value={props.value}
        {...props.elementConfig}
        className={inputClasses.join('')}/>
        )
      break;
    case ('select'):
      inputElement =( 
        <select
          onChange={props.changed}
          className={inputClasses.join('')}
          value={props.value}
          >
            {props.elementConfig.options.map(option => (
              <option key={option.value} value={option.value}>{option.displayValue}</option>
            ))}
          </select>)
      break
    default:
      inputElement = <input onChange={props.changed} value={props.value} {...props.elementConfig} className={inputClasses.join('')}/>
      break;
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
      {validationError}
    </div>
  )
}

export default Input
