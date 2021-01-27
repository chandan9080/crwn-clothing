import { cartActionType } from './cart.types'
export const toggleCartHidden = () => ({
  type: cartActionType.TOGGLE_CART_HIDDEN,
})
export const addItem = (item) => ({
  type: cartActionType.ADD_ITEM,
  payload: item,
})
export const removeItem = (item) => ({
  type: cartActionType.REMOVE_ITEM,
  payload: item,
})
export const clearCartItem = (item) => ({
  type: cartActionType.CLEAR_ITEMS_FROM_CART,
  payload: item,
})
