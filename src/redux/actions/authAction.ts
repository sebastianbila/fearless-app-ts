import firebase from "../../utils/firebase/FirebaseManager";
import {AUTO_LOGIN, LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, LOGOUT_SUCCESS, RESET_PASSWORD} from "../actionTypes";
import {User} from "firebase";

export type AuthTypeAction = {
    type: typeof LOGIN_SUCCESS | typeof LOGIN_ERROR | typeof LOGOUT_SUCCESS
    payload: { user: User | null, userUID: string }
}


export const loginRequest = (email: string, password: string) => ({type: LOGIN_REQUEST, payload: {email, password}})
export const loginSuccess = (user: User) => ({type: LOGIN_SUCCESS, payload: {user}})
export const loginError = () => ({type: LOGIN_ERROR})
export const autoLogin = () => ({type: AUTO_LOGIN})
export const resetPassword = (email: string) => ({type: RESET_PASSWORD, payload: {email}})
export const logout = () => ({type: LOGOUT})
export const logoutSuccess = () => ({type: LOGOUT_SUCCESS})


