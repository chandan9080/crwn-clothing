import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.style.scss'
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item.component'

const CartDropdowm = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItems.id} item={cartItem}></CartItem>
        ))}
        <CustomButton>Go To Checkout</CustomButton>
      </div>
    </div>
  )
}
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
})
export default connect(mapStateToProps, null)(CartDropdowm)
