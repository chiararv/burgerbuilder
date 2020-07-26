import React from 'react';

const OrderSummary = ({ingredients}) => {
  const ingredientSummary = Object.keys(ingredients)
.map(igKey => <li><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {ingredients[igKey]}</li> )

  return ( 
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to checkout?</p>
    </>
   );
}
 
export default OrderSummary;