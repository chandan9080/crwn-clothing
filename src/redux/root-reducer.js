import { combineReducers } from 'redux'
import userReducer from './reducer/users/user.reducer'
import cartReducer from './reducer/cart/cart.reducer'
export default combineReducers({
  user: userReducer,
  cart: cartReducer,
})
