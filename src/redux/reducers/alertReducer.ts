import {HIDE_ALERT, SHOW_ALERT} from "../actionTypes";
import {AlertActionType, messageType} from "../actions/alertAction";

export interface IAlertData {
    text: string,
    messageType: messageType
    status: boolean
    isShowing: boolean
    duration: number,
}

const initialState: IAlertData = {
    status: false,
    text: 'Null',
    messageType: 'error',
    isShowing: false,
    duration: 2500
}

export default function alert(state = initialState, action: AlertActionType) {
    switch (action.type) {
        case SHOW_ALERT:
            return {
                status: true,
                text: action.payload.text,
                messageType: action.payload.messageType || state.messageType,
                isShowing: true,
                duration: action.payload.duration || state.duration
            }
        case HIDE_ALERT:
            return {
                ...state,
                status: false,
                isShowing: false
            }
        default:
            return state
    }
}
