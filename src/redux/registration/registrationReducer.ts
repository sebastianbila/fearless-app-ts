import {
    IRegistrationData,
    RegistrationTypeAction,
} from "./registrationTypes";
import {CLEAR_DATA, SET_GENDER, SET_GOALS, SET_HEIGHT, SET_LEVEL, SET_REGISTRATION_DATA, SET_WEIGHT} from "../actionTypes";

const initialState: IRegistrationData = {
    gender: '',
    weight: 0,
    weightUnits: 0,
    height: 0,
    heightUnits: 0,
    level: 0,
    goals: [],
    data: {
        username: '',
        name: '',
        email: '',
        password: '',
    }
}

export default function registration(state = initialState, action: RegistrationTypeAction) {
    switch (action.type) {
        case SET_GENDER:
            return {
                ...state,
                gender: action.payload.gender
            }
        case SET_WEIGHT:
            return {
                ...state,
                weight: action.payload.weight,
                weightUnits: action.payload.weightUnits
            }
        case SET_HEIGHT:
            return {
                ...state,
                height: action.payload.height,
                heightUnits: action.payload.heightUnits
            }
        case SET_LEVEL:
            return {
                ...state,
                level: action.payload.level
            }
        case SET_GOALS:
            return {
                ...state,
                goals: action.payload.goals
            }
        case SET_REGISTRATION_DATA:
            return {
                ...state,
                data: action.payload.data
            }
        case CLEAR_DATA:
            return {
                gender: action.payload.gender,
                weight: action.payload.weight,
                height: action.payload.height,
                level: action.payload.level,
                goals: action.payload.goals,
                data: {
                    username: action.payload.data.username,
                    name: action.payload.data.email,
                    email: action.payload.data.email,
                    password: action.payload.data.password,
                }
            }
        default:
            return state
    }
}
