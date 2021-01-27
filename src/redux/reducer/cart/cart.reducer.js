import { cartActionType } from './cart.types'
import { addItemToCart, removeCartItem } from './cart.utils'

const INTIAL_STATE = {
  hidden: true,
  cartItems: [],
}
const cartReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case cartActionType.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      }
    case cartActionType.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      }
    case cartActionType.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeCartItem(state.cartItems, action.payload),
      }
    case cartActionType.CLEAR_ITEMS_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id,
        ),
      }
    default:
      return state
  }
}
export default cartReducer
