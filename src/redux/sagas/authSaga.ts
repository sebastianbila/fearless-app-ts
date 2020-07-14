import {call, put, takeEvery} from 'redux-saga/effects'
import {AUTO_LOGIN, LOGIN_REQUEST, LOGOUT, RESET_PASSWORD} from "../actionTypes";
import firebase from "../../utils/firebase/FirebaseManager";
import {hideLoader, showLoader} from "../actions/loaderAction";
import {loginError, loginSuccess, logout, logoutSuccess} from "../actions/authAction";
import {showAlert} from "../actions/alertAction";
import i18n from '../../utils/locales/LocalesConfig';

/**
 * Async function for the login user into app.
 * Returns a user instance or an error
 * @param email
 * @param password
 */
async function firebaseLogin(email: string, password: string) {
    const response = firebase.auth().signInWithEmailAndPassword(email, password)
    return await response
}

/**
 * Async function to check if user already logged into app
 * @return user or null
 */
function firebaseAutoLogin() {
    return new Promise((resolve => {
        firebase.auth().onAuthStateChanged((user) => {
            resolve(user)
        });
    }))
}

/**
 * Function to logout of user account
 * @return new Promise to resolve logout
 */
async function firebaseLogout() {
    return await firebase.auth().signOut()
}

/**
 * Function to reset user password
 * @param email, user email
 */
async function firebaseResetPassword(email: string) {
    return new Promise(resolve => {
        return firebase.auth().sendPasswordResetEmail(email).then((response) => {
            resolve({status: true})
        }).catch(error => {
            resolve({status: false, error})
        })
    })
}

/**
 * Receive data and dispatching them to redux
 * If the login data were correct then the dispatch an action to open the home screen
 * @param action, stored the user login data
 */
function* loginWorker(action: any) {
    const {email, password} = action.payload
    yield put(showLoader())
    try {
        const payload = yield call(firebaseLogin, email, password)
        yield put(hideLoader())
        yield put(loginSuccess(payload.user))
    } catch (e) {
        if (e.code === 'auth/wrong-password')
            yield put(showAlert(i18n.t("wrongCredentials")))
        else if (e.code === 'auth/user-not-found')
            yield put(showAlert(i18n.t("userNotFound")))
        else yield put(showAlert(i18n.t("somethingWrong")))
        yield put(hideLoader())
        yield put(loginError())
    }
}

/**
 * To receive auto login result
 * If user not nul then dispatch an action to open home screen
 * If user is null then go to login page
 */
function* autoLoginWorker() {
    yield put(showLoader())
    const user = yield call(firebaseAutoLogin)
    if (user !== null) {
        yield put(loginSuccess(user))
    } else {
        yield put(loginError())
    }
    yield put(hideLoader())
}

/**
 * It works when user press on logout
 */
function* logoutWorker() {
    yield put(showLoader())
    yield call(firebaseLogout)
    yield put(logoutSuccess())
    yield put(hideLoader())
}

/**
 * Receive data from reset password and show message, or error
 * @param action, to receive user email from action type
 */
function* resetPasswordWorker(action: any) {
    yield put(showLoader())
    const {email} = action.payload
    const {status, error} = yield call(firebaseResetPassword, email)
    if (status) {
        yield put(showAlert(i18n.t("resetPasswordMessage"), "message"))
    } else {
        if (error.code === 'auth/user-not-found')
            yield put(showAlert(i18n.t("emailNotFound")))
        else yield put(showAlert(i18n.t("emailNotFound")))
    }
    yield put(hideLoader())
}

/**
 * To keep track of dispatching actions in app
 */
function* authWatcher() {
    yield takeEvery(LOGIN_REQUEST, loginWorker)
    yield takeEvery(AUTO_LOGIN, autoLoginWorker)
    yield takeEvery(LOGOUT, logoutWorker)
    yield takeEvery(RESET_PASSWORD, resetPasswordWorker)
}

export default authWatcher
