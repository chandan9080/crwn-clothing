import { ReactComponent as ShoppingIcon } from '../../asset/shopping-bag.svg'
import React from 'react'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/reducer/cart/cart.action'
import { selectCartItemsCount } from '../../redux/reducer/cart/cart.reselect'
import './cart-icon.style.scss'

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden} />
      <span className="item-count">{itemCount}</span>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
})
const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
