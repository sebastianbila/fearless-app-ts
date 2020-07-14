import {
    CLEAR_DATA, SET_GENDER, SET_GOALS, SET_HEIGHT,
    SET_LEVEL, SET_REGISTRATION_DATA, SET_WEIGHT
} from "../actionTypes";

export interface IRegistrationData {
    gender: string,
    weight: number,
    weightUnits: number, // -1 is for kg, 1 for pounds, 0 - default
    height: number,
    heightUnits: number // -1 is for cm, 1 for inches, 0 - default,
    level: number
    goals: Array<number>,
    data: {
        username: string,
        name: string,
        email: string,
        password: string,
    }
}

export type GenderActionType = {
    type: typeof SET_GENDER,
    payload: {
        gender: string
    }
}

export type WeightActionType = {
    type: typeof SET_WEIGHT,
    payload: {
        weight: number
        weightUnits: number
    }
}

export type HeightActionType = {
    type: typeof SET_HEIGHT,
    payload: {
        height: number
        heightUnits: number
    }
}

export type LevelActionType = {
    type: typeof SET_LEVEL,
    payload: {
        level: number
    }
}

export type GoalsActionType = {
    type: typeof SET_GOALS,
    payload: {
        goals: Array<number>
    }
}

export type DataActionType = {
    type: typeof SET_REGISTRATION_DATA,
    payload: {
        data: object
    }
}

export type ClearActionType = {
    type: typeof CLEAR_DATA,
    payload: IRegistrationData
}

export type RegistrationTypeAction = GenderActionType | WeightActionType |
    HeightActionType | LevelActionType | GoalsActionType | DataActionType | ClearActionType
