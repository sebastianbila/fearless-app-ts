import {applyMiddleware, combineReducers, createStore} from "redux";
import reduxThunk from 'redux-thunk'
import alertReducer from "./reducers/alertReducer";
import registrationReducer from "./registration/registrationReducer";
import loaderReducer from "./reducers/loaderReducer";
import authReducer from "./reducers/authReducer";
import createSagaMiddleware from 'redux-saga'
import sagaWatcher from "./sagas/authSaga";
import logger from "redux-logger"
import {rootReducer} from "./reducer";

/* Saga Middleware Instance*/
const sagaMiddleware = createSagaMiddleware()

/* App state to combine reducers */
export type AppState = ReturnType<typeof rootReducer>;

/* Creating store and apply middleware*/
const store = createStore(rootReducer, applyMiddleware(reduxThunk, sagaMiddleware))

/* Running sagas*/
sagaMiddleware.run(sagaWatcher)

export default store
