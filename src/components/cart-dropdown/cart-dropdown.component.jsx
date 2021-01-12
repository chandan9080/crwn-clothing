import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.style.scss'

const CartDropdowm = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomButton>Go To Checkout</CustomButton>
      </div>
    </div>
  )
}

export default CartDropdowm
