import { userActionType } from './user.types'
const SET_INITIAL_STATE = {
    currentUser: null,
}
const userReducer = (state = SET_INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionType.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            }

        default:
            return state
    }
}
export default userReducer
