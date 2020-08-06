/* Combining reducers*/
import {combineReducers} from "redux";
import alertReducer from "./reducers/alertReducer";
import loaderReducer from "./reducers/loaderReducer";
import registrationReducer from "./registration/registrationReducer";
import authReducer from "./reducers/authReducer";
export const rootReducer = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    loader: loaderReducer,
    registration: registrationReducer,
})
