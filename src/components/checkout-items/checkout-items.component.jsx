import React from 'react'
import { connect } from 'react-redux'
import {
  clearCartItem,
  addItem,
  removeItem,
} from '../../redux/reducer/cart/cart.action'
import './checkout-items.style.scss'
const CheckoutItems = ({ cartItem, addItem, removeItem, clearCartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearCartItem(cartItem)}>
        &#10006;
      </div>
    </div>
  )
}
const matachDispatchToProps = (dispatch) => ({
  clearCartItem: (item) => dispatch(clearCartItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
})

export default connect(null, matachDispatchToProps)(CheckoutItems)
