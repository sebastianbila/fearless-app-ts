import {LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT_SUCCESS, RESET_PASSWORD} from "../actionTypes";
import {User} from "firebase";
import {AuthTypeAction} from "../actions/authAction";

const initialState: { currentUser: User | null } = {
    currentUser: null,
}

export default function loader(state = initialState, action: AuthTypeAction) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload.user,
            }
        case LOGIN_ERROR:
        case LOGOUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
            }
        default:
            return state
    }
}
