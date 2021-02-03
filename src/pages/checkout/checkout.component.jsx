import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CheckoutItems from '../../components/checkout-items/checkout-items.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.components'
import {
  selectCartItems,
  selectCartItemsTotal,
} from './../../redux/reducer/cart/cart.reselect'
import './checkout.style.scss'
const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>{' '}
      <div className="header-block">
        <span>Description</span>
      </div>{' '}
      <div className="header-block">
        <span>Price</span>
      </div>{' '}
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItems cartItem={cartItem} key={cartItem.id}></CheckoutItems>
    ))}
    <div className="total"> ${total}</div>
    <StripeCheckoutButton price={total} />
  </div>
)
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal,
})
export default connect(mapStateToProps)(CheckoutPage)
