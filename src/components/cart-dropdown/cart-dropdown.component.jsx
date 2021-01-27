import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.style.scss'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/reducer/cart/cart.reselect'
import { toggleCartHidden } from '../../redux/reducer/cart/cart.action'

const CartDropdowm = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          <div>
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem}></CartItem>
            ))}
            <CustomButton
              onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
              }}
            >
              Go To Checkout
            </CustomButton>
          </div>
        ) : (
          <span className="empty-message">No Items to go for Check out</span>
        )}
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
})
export default withRouter(connect(mapStateToProps, null)(CartDropdowm))
