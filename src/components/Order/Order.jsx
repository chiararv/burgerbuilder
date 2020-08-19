import React from 'react'
import classes from './Order.module.css'
const Order = ({price, ingredients}) => {
  const ingredientsArr = []
  for (let ingredientName in ingredients) {
    ingredientsArr.push(
      {
        name: ingredientName,
        amount: ingredients[ingredientName]
      }
    )
  }

  const ingredientOutput= ingredientsArr.map(ig => {
    return <span
        style={{
          textTransform: 'capitalize',
          display: 'inline-block',
          margin: '0 8px',
          border: '1px solid #ccc',
          padding:'5px'
        }}
        key={ig.name}>
          {ig.name} ({ig.amount})
      </span>
  })
  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput} </p>
      <p><strong>Price:</strong>{Number.parseFloat(price).toFixed(2)}</p>
    </div>
  )
}

export default Order
