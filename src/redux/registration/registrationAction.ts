import {
    IRegistrationData,
    RegistrationTypeAction
} from "./registrationTypes";
import {CLEAR_DATA, SET_GENDER, SET_GOALS, SET_HEIGHT, SET_LEVEL, SET_REGISTRATION_DATA, SET_WEIGHT} from "../actionTypes";

export const setGender = (gender: string): RegistrationTypeAction => ({
    type: SET_GENDER,
    payload: {gender}
});

export const setWeight = (weight: number, weightUnits: number): RegistrationTypeAction => ({
    type: SET_WEIGHT,
    payload: {weight, weightUnits}
});

export const setHeight = (height: number, heightUnits: number): RegistrationTypeAction => ({
    type: SET_HEIGHT,
    payload: {height, heightUnits}
});

export const setLevel = (level: number): RegistrationTypeAction => ({
    type: SET_LEVEL,
    payload: {level}
});

export const setGoals = (goals: Array<number>): RegistrationTypeAction => ({
    type: SET_GOALS,
    payload: {goals}
});

export const setData = (data: object): RegistrationTypeAction => ({
    type: SET_REGISTRATION_DATA,
    payload: {data}
});

export const clearData = (data: IRegistrationData): RegistrationTypeAction => ({
    type: CLEAR_DATA,
    payload: {
        gender: data.gender,
        weight: data.weight,
        weightUnits: data.weightUnits,
        height: data.height,
        heightUnits: data.heightUnits,
        level: data.level,
        goals: data.goals,
        data: {
            email: data.data.email,
            name: data.data.name,
            username: data.data.username,
            password: data.data.password,
        }
    }
});

