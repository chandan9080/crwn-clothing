import { ReactComponent as ShoppingIcon } from '../../asset/shopping-bag.svg'
import React from 'react'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/reducer/cart/cart.action'
import './cart-icon.style.scss'

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden} />
      <span className="item-count">0</span>
    </div>
  )
}
const mapDispatchToProps = (dispatch) =>( {
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)
   