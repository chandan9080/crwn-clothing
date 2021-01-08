import { combineReducers } from 'redux'
import userReducer from './reducer/users/user.reducer'
export default combineReducers({
  user: userReducer,
})
